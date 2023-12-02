from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, DecimalField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class BetForm(FlaskForm):
    spread_1_input = IntegerField("Spread 1 input money")
    spread_2_input = IntegerField("Spread 2 input money")
    under_input = IntegerField("Under input money")
    over_input = IntegerField("Over 1 input money")
    outcome = StringField("win or lose")
    submit = SubmitField("Submit")
