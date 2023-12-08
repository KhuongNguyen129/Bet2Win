"""empty message

Revision ID: 6e147198707e
Revises: 
Create Date: 2023-12-07 17:04:03.088518

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = '6e147198707e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('teams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('initial', sa.String(), nullable=False),
    sa.Column('logo', sa.String(), nullable=False),
    sa.Column('state', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE teams SET SCHEMA {SCHEMA};")

    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=False),
    sa.Column('last_name', sa.String(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('phone_number', sa.String(), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('games',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('time', sa.Integer(), nullable=False),
    sa.Column('spread_1', sa.Float(), nullable=False),
    sa.Column('spread_2', sa.Float(), nullable=False),
    sa.Column('total', sa.Float(), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=True),
    sa.Column('team_1_id', sa.Integer(), nullable=True),
    sa.Column('team_2_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['team_1_id'], ['teams.id'], ),
    sa.ForeignKeyConstraint(['team_2_id'], ['teams.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE games SET SCHEMA {SCHEMA};")
    op.create_table('bets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('spread_1_input', sa.Integer(), nullable=True),
    sa.Column('spread_2_input', sa.Integer(), nullable=True),
    sa.Column('under_input', sa.Integer(), nullable=True),
    sa.Column('over_input', sa.Integer(), nullable=True),
    sa.Column('outcome', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('game_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['game_id'], ['games.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE bets SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bets')
    op.drop_table('games')
    op.drop_table('users')
    op.drop_table('teams')
    # ### end Alembic commands ###
