from app.models import db, Game, environment, SCHEMA
from sqlalchemy.sql import text

def seed_games():
    SEA_vs_DAL = Game(
        time = "10:00",
        team_1_id = 1,
        team_2_id = 2,
        spread_1 = -4.5,
        spread_2 = 4.5,
        total = 45,
        money_line_1 = 250,
        money_line_2 = -150,
        owner_id = 1,
        active = True,
    )
    db.session.add(SEA_vs_DAL)
    
    LA_vs_NE = Game(
        time = "1:00",
        team_1_id = 3,
        team_2_id = 4,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        money_line_1 = 260,
        money_line_2 = -110,
        owner_id = 2,
        active = True,
    )
    db.session.add(LA_vs_NE)
    db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()