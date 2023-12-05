from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.Integer, nullable=False)
    spread_1 = db.Column(db.Float, nullable=False) 
    spread_2 = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    # active = db.Column(db.Boolean, nullable=False)

    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    
    team_1_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teams.id")))
    team_2_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teams.id")))

    team_1 = db.relationship("Team", foreign_keys=[team_1_id], back_populates="games")
    team_2 = db.relationship("Team", foreign_keys=[team_2_id], back_populates="games")


    bet = db.relationship("Bet", back_populates='game', cascade='all, delete')
    user = db.relationship("User", back_populates="game") 

    def to_dict(self):
        return {
            'id': self.id,
            'time': self.time, 
            'team_1': self.team_1.to_dict(include_games=False),
            'team_2': self.team_2.to_dict(include_games=False),
            'spread_1': self.spread_1,
            'spread_2': self.spread_2,
            'total': self.total,
            # 'active': self.active,
            'owner_id': self.owner_id,
            'user': self.user.to_dict(),
        }