from app.models import db, Bet, environment, SCHEMA
from sqlalchemy.sql import text

def seed_bets():
    SEA_VS_DAL_GAME = Bet(
        user_id = 1,
        game_id = 1,
        under_input = 100,
        spread_1_input = 100
    )
    db.session.add(SEA_VS_DAL_GAME)

    LA_VS_NE_GAME = Bet(
        user_id = 1,
        game_id = 2,
        over_input = 200,
        spread_2_input = 400
    )
    db.session.add(LA_VS_NE_GAME)
    ARI_VS_BAL_GAME = Bet(
        user_id = 1,
        game_id = 3,
        under_input = 600,
        spread_2_input = 400
    )
    db.session.add(ARI_VS_BAL_GAME)

    ATL_VS_BUF_GAME = Bet(
        user_id = 1,
        game_id = 4,
        over_input = 100,
        spread_1_input = 900
    )
    db.session.add(ATL_VS_BUF_GAME)

    CAR_VS_CIN_GAME = Bet(
        user_id = 1,
        game_id = 5,
        over_input = 200,
        spread_2_input = 400
    )
    db.session.add(CAR_VS_CIN_GAME)

    CHI_VS_CLE_GAME = Bet(
        user_id = 2,
        game_id = 6,
        over_input = 400,
        spread_2_input = 500
    )
    db.session.add(CHI_VS_CLE_GAME)

    DEN_VS_DET_GAME = Bet(
        user_id = 2,
        game_id = 7,
        under_input = 600,
        spread_1_input = 700
    )
    db.session.add(DEN_VS_DET_GAME)

    HOU_VS_GB_GAME = Bet(
        user_id = 2,
        game_id = 8,
        over_input = 1000,
    )
    db.session.add(HOU_VS_GB_GAME)

    IND_VS_RAM_GAME = Bet(
        user_id = 2,
        game_id = 9,
        spread_2_input = 2000
    )
    db.session.add(IND_VS_RAM_GAME)

    JAX_VS_MIN_GAME = Bet(
        user_id = 2,
        game_id = 10,
        under_input = 2000,
    )
    db.session.add(JAX_VS_MIN_GAME)

    KC_VS_NO_GAME = Bet(
        user_id = 3,
        game_id = 11,
        spread_1_input = 4000
    )
    db.session.add(KC_VS_NO_GAME)

    LV_VS_NYG_GAME = Bet(
        user_id = 3,
        game_id = 12,
        over_input = 2000,
        spread_2_input = 1500
    )
    db.session.add(LV_VS_NYG_GAME)
    
    PHI_VS_MIA_GAME = Bet(
        user_id = 3,
        game_id = 13,
        over_input = 200,
        spread_2_input = 150
    )
    db.session.add(PHI_VS_MIA_GAME)

    SF_VS_NYJ_GAME = Bet(
        user_id = 3,
        game_id = 14,
        over_input = 3000,
        spread_2_input = 200
    )
    db.session.add(SF_VS_NYJ_GAME)

    TB_VS_PIT_GAME = Bet(
        user_id = 3,
        game_id = 15,
        over_input = 2000,
        spread_2_input = 1500
    )
    db.session.add(TB_VS_PIT_GAME)

    db.session.commit()

def undo_bets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.bets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM bets"))

    db.session.commit()