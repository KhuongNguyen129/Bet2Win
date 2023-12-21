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

    CHAR_VS_NE = Game(
        time = 5,
        team_1_id = 3,
        team_2_id = 4,
        spread_1 = -2.5,
        spread_2 = 2.5,
        total = 42,
        owner_id = 2,
        # active = False,
    )
    db.session.add(CHAR_VS_NE)

    ARI_VS_BAL = Game(
        time = 3,
        team_1_id = 5,
        team_2_id = 6,
        spread_1 = -1.5,
        spread_2 = 1.5,
        total = 41,
        owner_id = 3,
        # active = False,
    )
    db.session.add(ARI_VS_BAL)
    
    ATL_VS_BUF = Game(
        time = 11,
        team_1_id = 7,
        team_2_id = 8,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 4,
        # active = False,
    )
    db.session.add(ATL_VS_BUF)

    CAR_VS_CIN = Game(
        time = 10,
        team_1_id = 9,
        team_2_id = 10,
        spread_1 = 2.5,
        spread_2 = -2.5,
        total = 37,
        owner_id = 4,
        # active = False,
    )
    db.session.add(CAR_VS_CIN)

    CHI_VS_CLE = Game(
        time = 16,
        team_1_id = 11,
        team_2_id = 12,
        spread_1 = -3.5,
        spread_2 = 3.5,
        total = 34,
        owner_id = 3,
        # active = False,
    )
    db.session.add(CHI_VS_CLE)

    DEN_VS_DET = Game(
        time = 18,
        team_1_id = 13,
        team_2_id = 14,
        spread_1 = 8.5,
        spread_2 = -8.5,
        total = 33,
        owner_id = 2,
        # active = False,
    )
    db.session.add(DEN_VS_DET)

    HOU_VS_GB = Game(
        time = 11,
        team_1_id = 15,
        team_2_id = 16,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 42,
        owner_id = 1,
        # active = False,
    )
    db.session.add(HOU_VS_GB)

    IND_VS_RAM = Game(
        time = 15,
        team_1_id = 17,
        team_2_id = 18,
        spread_1 = 1.5,
        spread_2 = -1.5,
        total = 44,
        owner_id = 1,
        # active = False,
    )
    db.session.add(IND_VS_RAM)

    JAX_VS_MIN = Game(
        time = 1,
        team_1_id = 19,
        team_2_id = 20,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 3,
        # active = False,
    )
    db.session.add(JAX_VS_MIN)

    KC_VS_NO = Game(
        time = 4,
        team_1_id = 21,
        team_2_id = 22,
        spread_1 = -3.5,
        spread_2 = 3.5,
        total = 48,
        owner_id = 2,
        # active = False,
    )
    db.session.add(KC_VS_NO)

    LV_VS_NYG = Game(
        time = 18,
        team_1_id = 23,
        team_2_id = 24,
        spread_1 = -1,
        spread_2 = 1,
        total = 21,
        owner_id = 4,
        # active = False,
    )
    db.session.add(LV_VS_NYG)

    PHI_VS_MIA = Game(
        time = 12,
        team_1_id = 25,
        team_2_id = 26,
        spread_1 = 5,
        spread_2 = -5,
        total = 40,
        owner_id = 3,
        # active = False,
    )
    db.session.add(PHI_VS_MIA)

    SF_VS_NYJ = Game(
        time = 8,
        team_1_id = 27,
        team_2_id = 28,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 2,
        # active = False,
    )
    db.session.add(SF_VS_NYJ)

    TB_VS_PIT = Game(
        time = 7,
        team_1_id = 29,
        team_2_id = 30,
        spread_1 = -2.5,
        spread_2 = 2.5,
        total = 42,
        owner_id = 3,
        # active = False,
    )
    db.session.add(TB_VS_PIT)

    WAS_VS_TEN = Game(
        time = 16,
        team_1_id = 31,
        team_2_id = 32,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 1,
        # active = False,
    )
    db.session.add(WAS_VS_TEN)

    SEA_VS_ARI = Game(
        time = 19,
        team_1_id = 1,
        team_2_id = 5,
        spread_1 = -6.5,
        spread_2 = 6.5,
        total = 46,
        owner_id = 2,
        # active = False,
    )
    db.session.add(SEA_VS_ARI)

    BAL_VS_CAR = Game(
        time = 13,
        team_1_id = 6,
        team_2_id = 9,
        spread_1 = -5,
        spread_2 = 5,
        total = 45,
        owner_id = 1,
        # active = False,
    )
    db.session.add(BAL_VS_CAR)

    CIN_VS_DET = Game(
        time = 7,
        team_1_id = 10,
        team_2_id = 14,
        spread_1 = 1,
        spread_2 = -1,
        total = 30,
        owner_id = 4,
        # active = False,
    )
    db.session.add(CIN_VS_DET)

    HOU_VS_KC = Game(
        time = 1,
        team_1_id = 15,
        team_2_id = 21,
        spread_1 = 8.5,
        spread_2 =-8.5,
        total = 51,
        owner_id = 4,
        # active = False,
    )
    db.session.add(HOU_VS_KC)
    db.session.commit()

def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()