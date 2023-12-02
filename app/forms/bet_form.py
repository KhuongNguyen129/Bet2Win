from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, IntegerField
from wtforms.validators import DataRequired


class BetFormUpdate(FlaskForm):
    spread_1_input = IntegerField("Spread 1 input money")
    spread_2_input = IntegerField("Spread 2 input money")
    under_input = IntegerField("Under input money")
    over_input = IntegerField("Over 1 input money")
    outcome = StringField("win or lose")
    submit = SubmitField("Submit")

    def validate(self, extra_validators=None):
        rv = super().validate(extra_validators=extra_validators)
        if not rv:
            return False

        if not any([self.spread_1_input.data, self.spread_2_input.data, self.under_input.data, self.over_input.data]):
            self.under_input.errors.append("At least one field must be filled in.")
            return False
        # self.under_input.errors.append("This is always bad data! I'm not that smart")
        # company = Company.query.filter_by(name=self.name.data, address=self.address.data).first()
        # if company is not None:
            # self.name.errors.append('Company already exists at that address')
            # return False

        # Return true if there are no errors
        return True

class BetFormCreate(BetFormUpdate):
    game_id = IntegerField("Game ID", [DataRequired()])
