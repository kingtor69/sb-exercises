from flask import flask
import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "big-secret"

debug = DebugToolbarExtension(app)

