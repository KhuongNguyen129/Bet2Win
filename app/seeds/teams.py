from app.models import db, Game, Team, environment, SCHEMA
from sqlalchemy.sql import text

def seed_teams():
    SEA = Team(
        name = "Seattle Seahawks",
        initial = "SEA",
        logo = "https://freelogopng.com/images/all_img/1656258083seahawks-logo.png",
        state = "WA"
    )
    db.session.add(SEA)

    DAL = Team(
        name = "Dallas Cowboys",
        initial = "DAL",
        logo = "https://i.pinimg.com/736x/e2/d8/10/e2d810d305ff40de1fc02d952f12f727.jpg",
        state = "TX"
    )
    db.session.add(DAL)

    CHARGERS = Team(
        name = "LA Chargers",
        initial = "LA",
        logo = "https://www.riddell.com/medias/sys_master/images/images/h47/h1f/8803218849822/-1200Wx1200H-000000000008056529-1.png",
        state = "CA"
    )
    db.session.add(CHARGERS)

    NE = Team(
        name = "NE Patriots",
        initial = "NE",
        logo = "https://www.riddell.com/medias/sys_master/images/images/h4b/hf8/8803095117854/-300Wx300H-000000000008055804-1.png",
        state = "MA"
    )
    db.session.add(NE)
    db.session.commit()


def undo_teams():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM teams"))

    db.session.commit()



