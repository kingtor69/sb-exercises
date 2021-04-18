# app.py written entirely by Tor Kingdon

from flask import Flask, request, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys
from helpers import survey_size

app = Flask(__name__)
app.config['SECRET_KEY'] = "big-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

# initialize global variables
# all are redefined on the landing_page
responses = []
text_responses = []
survey_key = ''
# survey = surveys[survey_key]
# surveys.pop('dummy')
# (num_questions, columns) = survey_size(survey)
# num_questions = 0
# columns = 0
next_question = 0
survey_done = False

@app.route('/')
def landing_page():
	"""for the time being, this redirects to the satisfaction_survey
	future development may include options"""
	# reset global variables
	responses = []
	text_responses = []
	# (num_questions, columns) = survey_size(survey)
	next_question = 0
	survey_done = False
	
	return render_template('home.html', surveys = surveys)

@app.route('/survey-of-surveys', methods=['POST'])
def go_to_chosen_survey():
	survey_key = request.form['take-this-survey']
	survey = surveys[survey_key]
	(num_questions, columns) = survey_size(survey)
	return redirect(f'/question/0')


# doing fine on question/0, but on question/1 it gets a method error
@app.route(f'/question/<question>', methods=['POST'])
def display_next_question(question):
	question_num = int(question)
	if question_num == 0:
		survey_key = request.form['take-this-survey']
		survey = surveys[survey_key]
		# apparently we need to pass the survey key to and from the page
		# this is where I was in working on that	
		(num_questions, columns) = survey_size(survey)
	elif question_num == len(request.form):
		survey_done = True
		return render_template('response.html', survey = surveys[survey_key], responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)
	else:
		responses.append(request.form['choice'])
		text = None
		if len(request.form) > 1:
			text = request.form['elaboration']
			text_responses.append(text)
		if question_num == len(survey.questions):
			survey_done = True
			return render_template('response.html', survey = survey, responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)
	next_question = question_num + 1
	return render_template('question.html', question_id = next_question, survey = survey, columns = columns)

