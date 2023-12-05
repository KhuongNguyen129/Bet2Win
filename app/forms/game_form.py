from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, DecimalField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class GameForm(FlaskForm):
    time = IntegerField("Time start", validators=[DataRequired()])
    team_1 = IntegerField("Team one", validators=[DataRequired()])
    team_2 = IntegerField("Team two", validators=[DataRequired()])
    spread_1 = DecimalField("Spread Team 1", validators=[DataRequired()], places=1)
    spread_2 = DecimalField("Spread Team 2", validators=[DataRequired()], places=1)
    total = DecimalField("Total score", validators=[DataRequired()], places=1)
    # active = BooleanField("Active")
    submit = SubmitField("Submit")

