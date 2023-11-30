from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime, nullable=False)
    team_1 = db.Column(db.String, nullable=False)
    team_2 = db.Column(db.String, nullable=False)
    spread_1 = db.Column(db.Float, nullable=False)  # Assuming spread is a decimal value
    spread_2 = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    money_line_1 = db.Column(db.Integer, nullable=False)
    money_line_2 = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Boolean, nullable=False)

    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))

    user = db.relationship("User", back_populates="games")  

    def to_dict(self):
        return {
            'id': self.id,
            'time': self.time.strftime("%Y-%m-%d %H:%M:%S"), 
            'team_1': self.team_1,
            'team_2': self.team_2,
            'spread_1': self.spread_1,
            'spread_2': self.spread_2,
            'total': self.total,
            'money_line_1': self.money_line_1,
            'money_line_2': self.money_line_2,
            'active': self.active,
            'result': self.result,
            'bet': self.bet,
            'owner_id': self.owner_id,
            'user': self.user.to_dict() if self.user else None,
        }