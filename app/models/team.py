from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Team(db.Model):
    __tablename__ = "teams"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    initial = db.Column(db.String, nullable=False)
    logo = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)

    games = db.relationship("Game", primaryjoin="or_(Team.id==Game.team_1_id, Team.id==Game.team_2_id)")


    def to_dict(self, include_games=True):
        return {
            'id': self.id,
            'name': self.name,
            'initial': self.initial,
            'logo': self.logo,
            'state': self.state,
            **({'games': [game.to_dict() for game in self.games]} if include_games else {})
        }