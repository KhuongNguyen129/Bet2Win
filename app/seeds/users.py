from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name="De", last_name="mo", username='Demo', email='demo@aa.io', password='password', phone_number="2068828883")
    marnie = User(
        first_name="Mar", last_name="nie", username='Marnie', email='marnie@aa.io', password='password', phone_number="2068428833")
    bobbie = User(
        first_name="Bob", last_name="bie", username='Bobbie', email='bobbie@aa.io', password='password', phone_number="2062228823")
    kyle = User(
        first_name="Kyle", last_name="le", username='Kyle', email='Kyle@aa.io', password='password', phone_number="2062243823")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(kyle)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()