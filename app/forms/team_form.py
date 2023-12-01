from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class TeamForm(FlaskForm):
    name = StringField("Team Name", validators=[DataRequired()])
    initial = StringField("Team Initial", validators=[DataRequired()])
    logo = StringField("Team Logo", validators=[DataRequired()])
    state = StringField("Team State", validators=[DataRequired()])
    submit = SubmitField("Submit")
