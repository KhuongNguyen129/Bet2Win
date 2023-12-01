from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, DecimalField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class GameForm(FlaskForm):
    time = StringField("Time start", validators=[DataRequired()])
    team_1_id = IntegerField("Team one", validators=[DataRequired()])
    team_2_id = IntegerField("Team two", validators=[DataRequired()])
    spread_1 = DecimalField("Spread Team 1", validators=[DataRequired()], places=1)
    spread_2 = DecimalField("Spread Team 2", validators=[DataRequired()], places=1)
    total = DecimalField("Total score", validators=[DataRequired()], places=1)
    money_line_1 = IntegerField("Money Line 1", validators=[DataRequired()])
    money_line_2 = IntegerField("Money Line 2", validators=[DataRequired()])
    owner_id = IntegerField("Owner ID", validators=[DataRequired()])
    active = BooleanField("Active")
    submit = SubmitField("Submit")

