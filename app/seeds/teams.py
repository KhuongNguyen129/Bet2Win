from app.models import db, Game, Team, environment, SCHEMA
from sqlalchemy.sql import text

def seed_teams():
    SEA = Team(
        name = "Seattle Seahawks",
        initial = "SEA",
        logo = "https://www.pngall.com/wp-content/uploads/13/Seahawks-Logo-PNG-File.png",
        state = "WA"
    )
    db.session.add(SEA)

    DAL = Team(
        name = "Dallas Cowboys",
        initial = "DAL",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/100px-Dallas_Cowboys.svg.png",
        state = "TX"
    )
    db.session.add(DAL)

    CHARGERS = Team(
        name = "LA Chargers",
        initial = "LA",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Los_Angeles_Chargers_logo.svg/408px-Los_Angeles_Chargers_logo.svg.png",
        state = "CA"
    )
    db.session.add(CHARGERS)

    NE = Team(
        name = "NE Patriots",
        initial = "NE",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/2560px-New_England_Patriots_logo.svg.png",
        state = "MA"
    )
    db.session.add(NE)


    ARI = Team(
        name = "Arizona Cardinals",
        initial = "ARI",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Arizona_Cardinals_logo.svg/1920px-Arizona_Cardinals_logo.svg.png",
        state = "AZ"
    )
    db.session.add(ARI)

    BAL = Team(
        name = "Baltimore Ravens",
        initial = "BAL",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/2560px-Baltimore_Ravens_logo.svg.png",
        state = "MD"
    )
    db.session.add(BAL)

    ATL = Team(
        name = "Atlanta Falcons",
        initial = "ATL",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/1280px-Atlanta_Falcons_logo.svg.png",
        state = "GA"
    )
    db.session.add(ATL)

    BUF = Team(
        name = "Buffalo Bills",
        initial = "BUF",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/1920px-Buffalo_Bills_logo.svg.png",
        state = "NY"
    )
    db.session.add(BUF)

    CAR = Team(
        name = "Carolina Panthers",
        initial = "CAR",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Carolina_Panthers_logo.svg/2560px-Carolina_Panthers_logo.svg.png",
        state = "NC"
    )
    db.session.add(CAR)

    CIN = Team(
        name = "Cincinnati Bengals",
        initial = "CIN",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/1920px-Cincinnati_Bengals_logo.svg.png",
        state = "OH"
    )
    db.session.add(CIN)

    CHI = Team(
        name = "Chicago Bears",
        initial = "CHI",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Chicago_Bears_logo_primary.svg/1280px-Chicago_Bears_logo_primary.svg.png",
        state = "IL"
    )
    db.session.add(CHI)

    CLE = Team(
        name = "Cleveland Browns",
        initial = "CLE",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Cleveland_Browns_logo.svg/1920px-Cleveland_Browns_logo.svg.png",
        state = "OH"
    )
    db.session.add(CLE)

    DEN = Team(
        name = "Denver Broncos",
        initial = "DEN",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/2560px-Denver_Broncos_logo.svg.png",
        state = "CO"
    )
    db.session.add(DEN)

    DET = Team(
        name = "Detroit Lions",
        initial = "DET",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Detroit_Lions_logo.svg/1920px-Detroit_Lions_logo.svg.png",
        state = "MI"
    )
    db.session.add(DET)

    HOU = Team(
        name = "Houston Texans",
        initial = "HOU",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Texans_logo.svg/1920px-Houston_Texans_logo.svg.png",
        state = "TX"
    )
    db.session.add(HOU)

    GB = Team(
        name = "Green Bay Packers",
        initial = "GB",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/1920px-Green_Bay_Packers_logo.svg.png",
        state = "WY"
    )
    db.session.add(GB)

    IND = Team(
        name = "Indianapolis Colts",
        initial = "IND",
        logo = "https://banner2.cleanpng.com/20180529/rxk/kisspng-indianapolis-colts-nfl-seattle-seahawks-san-franci-5b0d7fe9ee6fe3.6498911815276113699767.jpg",
        state = "NY"
    )
    db.session.add(IND)

    LA = Team(
        name = "Los Angeles Rams",
        initial = "LA",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Los_Angeles_Rams_logo.svg/1920px-Los_Angeles_Rams_logo.svg.png",
        state = "CA"
    )
    db.session.add(LA)

    JAX = Team(
        name = "Jacksonville Jaguars",
        initial = "JAX",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Jacksonville_Jaguars_logo.svg/1920px-Jacksonville_Jaguars_logo.svg.png",
        state = "FL"
    )
    db.session.add(JAX)

    MIN = Team(
        name = "Minnesota Vikings",
        initial = "MIN",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Minnesota_Vikings_logo.svg/1024px-Minnesota_Vikings_logo.svg.png",
        state = "NY"
    )
    db.session.add(MIN)

    KC = Team(
        name = "Kansas City Chiefs",
        initial = "KC",
        logo = "https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-logo.png",
        state = "MO"
    )
    db.session.add(KC)

    NO = Team(
        name = "New Orleans Saints",
        initial = "NO",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/1024px-New_Orleans_Saints_logo.svg.png",
        state = "LA"
    )
    db.session.add(NO)

    LV = Team(
        name = "Las Vegas Raiders",
        initial = "LV",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Las_Vegas_Raiders_logo.svg/1280px-Las_Vegas_Raiders_logo.svg.png",
        state = "NV"
    )
    db.session.add(LV)

    NYG = Team(
        name = "New York Giants",
        initial = "NYG",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/1920px-New_York_Giants_logo.svg.png",
        state = "NY"
    )
    db.session.add(NYG)
    
    PHI = Team(
        name = "Philadelphia Eagles",
        initial = "PHI",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/1920px-Philadelphia_Eagles_logo.svg.png",
        state = "PA"
    )
    db.session.add(PHI)

    MIA = Team(
        name = "Miami Dolphins",
        initial = "MIA",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Miami_Dolphins_logo.svg/1920px-Miami_Dolphins_logo.svg.png",
        state = "FL"
    )
    db.session.add(MIA)

    SF = Team(
        name = "San Francisco 49ers",
        initial = "SF",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/2560px-San_Francisco_49ers_logo.svg.png",
        state = "CA"
    )
    db.session.add(SF)

    NYJ = Team(
        name = "New York Jets",
        initial = "NYJ",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/2560px-New_York_Jets_logo.svg.png",
        state = "NJ"
    )
    db.session.add(NYJ)

    TB = Team(
        name = "Tampa Bay Buccaneers",
        initial = "TB",
        logo = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tampa_Bay_Buccaneers_logo.svg/1920px-Tampa_Bay_Buccaneers_logo.svg.png",
        state = "FL"
    )
    db.session.add(TB)

    PIT = Team(
        name = "Pittsburgh Steelers",
        initial = "PIT",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/1280px-Pittsburgh_Steelers_logo.svg.png",
        state = "PA"
    )
    db.session.add(PIT)

    WAS = Team(
        name = "Washington Commanders",
        initial = "WAS",
        logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Washington_Commanders_logo.svg/2560px-Washington_Commanders_logo.svg.png",
        state = "DC"
    )
    db.session.add(WAS)

    TEN = Team(
        name = "Tennessee Titans",
        initial = "TEN",
        logo = "https://i.pinimg.com/originals/ef/66/63/ef6663ec2aa05987e5470148a3f29223.png",
        state = "TN"
    )
    db.session.add(TEN)

    db.session.commit()


def undo_teams():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM teams"))

    db.session.commit()



