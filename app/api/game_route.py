from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Game

game_routes = Blueprint("games", __name__)

@game_routes.route('/')

def get_all_games():
    games = Game.query.all()
    return jsonify([game.to_dict() for game in games])