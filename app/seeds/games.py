from app.models import db, Game, environment, SCHEMA
from sqlalchemy.sql import text

def seed_games():
    SEA_vs_DAL = Game(
        time = 8,
        team_1_id = 1,
        team_2_id = 2,
        spread_1 = -4.5,
        spread_2 = 4.5,
        total = 45,
        owner_id = 1,
        # active = False
    )
    db.session.add(SEA_vs_DAL)

    ARI_vs_BAL = Game(
        time = 5,
        team_1_id = 5,
        team_2_id = 6,
        spread_1 = -2.5,
        spread_2 = 2.5,
        total = 42,
        owner_id = 1,
        # active = False,
    )
    db.session.add(ARI_vs_BAL)

    ALT_vs_BUFF = Game(
        time = 3,
        team_1_id = 7,
        team_2_id = 8,
        spread_1 = -1.5,
        spread_2 = 1.5,
        total = 41,
        owner_id = 3,
        # active = False,
    )
    db.session.add(ALT_vs_BUFF)
    
    LA_vs_NE = Game(
        time = 1,
        team_1_id = 3,
        team_2_id = 4,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 2,
        # active = False,
    )
    db.session.add(LA_vs_NE)
    db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()