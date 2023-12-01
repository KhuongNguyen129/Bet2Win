from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Team
from app.forms import TeamForm

team_routes = Blueprint("teams", __name__)

@team_routes.route('/')

def get_all_teams():
    teams = Team.query.all()
    return jsonify([team.to_dict() for team in teams])

@team_routes.route("/<int:id>")
def get_team(id):
    """
    Get one team
    """
    team = Team.query.get(id)
    if team:
        return team.to_dict()
    else:
        return {"error": "Team could not be found"}, 404    
