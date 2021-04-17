from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "big-secret"

debug = DebugToolbarExtension(app)

responses = []

@app.route('/')
def show_satisfaction_survey():
	num_questions = len(satisfaction_survey.questions)
	any_text_allowed = False
	columns = 2
	for i in range(num_questions):
		if satisfaction_survey.questions[i].allow_text:
			any_text_allowed = True
	if any_text_allowed:
		columns = 3

	return render_template('survey.html', survey = satisfaction_survey, num_questions = num_questions, columns = columns)