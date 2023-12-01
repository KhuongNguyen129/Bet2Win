from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Game
from app.forms import GameForm
from app.api.auth_routes import validation_errors_to_error_messages

game_routes = Blueprint("games", __name__)

@game_routes.route('/')

def get_all_games():
    games = Game.query.all()
    return jsonify([game.to_dict() for game in games])

@game_routes.route("/<int:id>")
def get_game(id):
    """
    Get one game
    """
    game = Game.query.get(id)
    if game:
        return game.to_dict()
    else:
        return {"error": "Game could not be found"}, 404    

@game_routes.route("/new", methods=["POST"])
@login_required
def create_games():
    """
    Create game (while logged in)
    """
    form = GameForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        create_game = Game(
            time = form.data["time"],
            team_1_id=form.data["team_1_id"],
            team_2_id=form.data["team_2_id"],
            spread_1=form.data["spread_1"],
            spread_2=form.data["spread_2"],
            total=form.data["total"],
            money_line_1=form.data["money_line_1"],
            money_line_2=form.data["money_line_2"],
            owner_id=form.data["owner_id"],
            active=form.data["active"],
        )

        db.session.add(create_game)
        db.session.commit()
        return {"newGame": create_game.to_dict()}
    else:
        return jsonify({"error": validation_errors_to_error_messages(form.errors)}), 400


@game_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_game(id):
    """
    Update game (while logged in)
    """
    game = Game.query.get(id)

    if not game:
        return {"message": "game not found"}, 404

    if current_user.id != game.owner_id:
        return {"message": "You do not have permission to update this game"}, 403

    form = GameForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        game.time = form.data["time"]
        game.team_1_id=form.data["team_1_id"]
        game.team_2_id=form.data["team_2_id"]
        game.spread_1=form.data["spread_1"]
        game.spread_2=form.data["spread_2"]
        game.total=form.data["total"]
        game.money_line_1=form.data["money_line_1"]
        game.money_line_2=form.data["money_line_2"]
        game.owner_id=form.data["owner_id"]
        game.active=form.data["active"]
        db.session.commit()

        return {"resUpdateGame": game.to_dict()}

    return {"error": validation_errors_to_error_messages(form.errors)}, 400


@game_routes.route("/<int:gameId>", methods=["DELETE"])
@login_required
def delete_game(gameId):
    """
    Delete game (while logged in)
    """
    currentGame = Game.query.get(gameId)

    if not currentGame:
        return {'error': 'Game does not exists'}, 404

    if currentGame.owner_id != current_user.id:
        return {'error': 'You do not have permission to delete this game'}, 401




    db.session.delete(currentGame)
    db.session.commit()
    return {'error': 'Game successfully deleted'}





        