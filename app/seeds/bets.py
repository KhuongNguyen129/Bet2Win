from app.models import db, Bet, environment, SCHEMA
from sqlalchemy.sql import text

def seed_bets():
    SEA_vs_DAL_Game = Bet(
        user_id = 2,
        game_id = 1,
        under_input = 100,
        spread_1_input = 100
    )
    db.session.add(SEA_vs_DAL_Game)

    LA_vs_NE_Game = Bet(
        user_id = 3,
        game_id = 2,
        over_input = 200,
        spread_2_input = 400
    )
    db.session.add(LA_vs_NE_Game)

    db.session.commit()

def undo_bets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.bets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM bets"))

    db.session.commit()