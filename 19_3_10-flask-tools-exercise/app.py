# app.py written entirely by Tor Kingdon

from flask import Flask, request, render_template, redirect, flash
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
# survey_key = ''
active_survey = surveys['dummy']
surveys.pop('dummy')
(num_questions, columns) = survey_size(active_survey)
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

# doing fine on question/0, but on question/1 it gets a method error
@app.route(f'/question/<int:question>', methods=['POST', 'GET'])
def display_next_question(question):
	"""process previous page and move on to next question"""
	print(f'question={question}')
	where_are_we = len(responses)

	# if this came as a get request, it didn't come from our form
	if methods.count('GET') > 0:
		# if there is no survey loaded, we need to start over
		if not survey_key or survey_key == "dummy":
			flash("no survey is loaded", "error")
			return redirect('/')

	survey_key = request.form['key']
	# determine the number of the page we should be on

	# if this is the first question of the selected survey
	if where_are_we == 0 and question == 0:
		survey_key = request.form['key']
		active_survey = surveys[survey_key]
		(num_questions, columns) = survey_size(active_survey)

		return render_template('question.html', question_id = (question + 1), survey = active_survey, key = survey_key, columns = columns)

	# redirect to home page if a user manually navigates to a question page wihtout selecting a survey:
	if survey_key == "dummy":
		return redirect('/')
	# redirect to the next question if user manually navigated to a question number out of sequence:
	if not question == where_are_we:
		return redirect(f'/question/{where_are_we}')


	# we're only at this point if a question has just been answered
	# was there a text field in the question?
	if len(request.form) == 1:
		responses.append(request.form['choice'])
	elif len(request.form) == 2:
		responses.append([request.form['choice'], request.form['elaboration']])
	else:
		flash("unexpected number of inputs on form", "error")
		return redirect(f'/question/{where_are_we}')

	# if user just answered the last question of the survey:
	if question + 1 == len(request.form):
		survey_done = True
		return render_template('response.html', survey = active_survey, responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)

	# user has at least one more question to answer

	return render_template('question.html', question_id = (question + 1), survey = active_survey, key = survey_key, columns = columns)

	# return render_template('question.html', survey = survey, responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)

	# return render_template('response.html', survey = survey, responses = responses, text_responses = text_responses, num_questions = num_questions, columns = columns)
	# next_question = question_num + 1
	# return render_template('question.html', question_id = next_question, survey = survey, columns = columns)

