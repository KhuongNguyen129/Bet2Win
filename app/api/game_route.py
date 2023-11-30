from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Game

game_routes = Blueprint("games", __name__)

@game_routes.route('/')

def get_all_games():
    games = Gane.query.all()
    return jsonify([games.to_dict() for game in games])