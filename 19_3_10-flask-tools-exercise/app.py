from flask import Flask, request, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey
from helpers import *

app = Flask(__name__)
app.config['SECRET_KEY'] = "big-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

# initialize array for survey respones
responses = []
text_responses = []

# this is where variable survey is currently hard-wired to the satisfaction_survey
# may change in future development
survey = satisfaction_survey

@app.route('/')
def landing_page():
	"""for the time being, this redirects to the satisfaction_survey
	future development may include options"""
	# reinitialize global variables
	responses = []
	text_responses = []
	survey = satisfaction_survey

	return redirect('/survey')

@app.route('/survey')
def show_survey():
	"""create an HTML form to display the selected survey"""
	(num_questions, columns) = survey_size(survey)

	return render_template('survey.html', survey = survey, num_questions = num_questions, columns = columns)

@app.route('/response', methods=["POST"])
def process_response():
# 	"""process user's responses to the survey and output to HTML template"""
	(num_questions, columns) = survey_size(survey)
	for i in range(num_questions):
		responses.append(request.form[f'q{i}'])
		text_responses.append(request.form[f't{i}'])

	return render_template('response.html', survey = survey, responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)