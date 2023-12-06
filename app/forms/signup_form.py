from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def contains_at_symbol(form, field):
    if '@' not in field.data:
        raise ValidationError('Invalid email.')

class SignUpForm(FlaskForm):
    first_name = StringField("First_name", validators=[DataRequired()])
    last_name = StringField("Last_Name", validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, contains_at_symbol])
    password = PasswordField('password', validators=[DataRequired(),  Length(min=6, message='Password must be at least 6 characters long')])
    state = StringField('State', validators=[DataRequired(), Length(2 ,message="State must be 2 characters")])
    phone_number = StringField('Phone_Number', validators=[DataRequired(), Length(min=10,max=10, message="Phone Number must be 10 characters")])

