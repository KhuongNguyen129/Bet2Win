from app.models import db, Game, environment, SCHEMA
from sqlalchemy.sql import text

def seed_games():
    SEA_vs_RAM = Game(
        time = "10:00",
        team_1 = "SEA",
        team_2 = "RAM",
        spread_1 = -4.5,
        spread_2 = 4.5,
        total = 45,
        money_line_1 = 250,
        money_line_2 = -150,
        owner_id = 1,
        active = True,
    )
    db.session.add(SEA_vs_RAM)
    db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()