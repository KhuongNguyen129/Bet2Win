from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Bet(db.Model):
    __tablename__ = "bets"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    spread_1_input = db.Column(db.Integer)
    spread_2_input = db.Column(db.Integer) 
    under_input = db.Column(db.Integer)
    over_input = db.Column(db.Integer)
    outcome = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("games.id")), nullable=False)

    game = db.relationship("Game", back_populates="bet") 

    def to_dict(self):
        return {
            'id': self.id,
            'spread_1_input': self.spread_1_input, 
            'spread_2_input': self.spread_2_input,
            'under_input': self.under_input,
            'over_input': self.over_input,
            'outcome': self.outcome,
            'user_id': self.user_id,
            'game_id': self.game_id,
            'game': self.game.to_dict() if self.game else None
        }