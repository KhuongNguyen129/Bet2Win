from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Bet
from app.forms import BetFormCreate, BetFormUpdate
from app.api.auth_routes import validation_errors_to_error_messages

bet_routes = Blueprint("bets", __name__)

@bet_routes.route('/')
def get_all_bets():
    bets = Bet.query.all()
    # print("This is bet from print >>>>>>>:       ", bets)
    return jsonify([bet.to_dict() for bet in bets])

@bet_routes.route("/<int:id>")
@login_required
def get_bet(id):
    """
    Get one bet
    """
    bet = Bet.query.get(id)
    if bet:
        return bet.to_dict()
    else:
        return {"error": "Bet could not be found"}, 404    

@bet_routes.route("/new", methods=["POST"])
@login_required
def create_bet():
    """
    Create bet (while logged in)
    """
    form = BetFormCreate()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        create_bet = Bet(
            spread_1_input = form.data["spread_1_input"],
            spread_2_input=form.data["spread_2_input"],
            under_input=form.data["under_input"],
            over_input=form.data["over_input"],
            outcome=form.data["outcome"],
            game_id= form.data["game_id"],
            user_id= current_user.id
        )

        db.session.add(create_bet)
        db.session.commit()
        return {"newBet": create_bet.to_dict()}
    else:
        return jsonify({"error": validation_errors_to_error_messages(form.errors)}), 400

@bet_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_bet(id):
    """
    Update bet (while logged in)
    """
    bet = Bet.query.get(id)

    if not bet:
        return {"message": "bet not found"}, 404

    if current_user.id != bet.user_id:
        return {"message": "You do not have permission to update this bet"}, 403

    form = BetFormUpdate()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        bet.spread_1_input = form.data["spread_1_input"]
        bet.spread_2_input=form.data["spread_2_input"]
        bet.under_input=form.data["under_input"]
        bet.over_input=form.data["over_input"]
        bet.outcome=form.data["outcome"]
        db.session.commit()
    
        return {"resUpdateBet": bet.to_dict()}
  
    return {"error": validation_errors_to_error_messages(form.errors)}, 400


@bet_routes.route("/<int:betId>", methods=["DELETE"])
@login_required
def delete_bet(betId):
    """
    Delete bet (while logged in)
    """
    currentBet = Bet.query.get(betId)

    if not currentBet:
        return {'error': 'Bet does not exists'}, 404

    if currentBet.user_id != current_user.id:
        return {'error': 'You do not have permission to delete this Bet'}, 401


    db.session.delete(currentBet)
    db.session.commit()
    return {'error': 'Bet successfully deleted'}
