# this was a misguided idea, I think
for i in range(num_questions):
	@app.route(/question/{i})
	def ask_question():
		"""if user is answering questions in order, ask the next question
		if not, redirect to the appropriate spot"""
		# check if user has manually navigated to a question in the dummy survey
		if survey.title == "Dummy":
			return redirect('/')		

		# check if user has manually navigated to a question that does not exist
		if i >= num_questions:
			if survey_done:
				return redirect('/completed_survey')
			else: 
				return redirect(f'/question/{next_question}')

		# check if user has manually navigated to a question out of turn
		if not i == next_question:
			return redirect(f'/question/{next_question}')

		next_question += 1
		return ('question.html', question_num = next_question, question = survey.questions[i].question, choices = survey.questions[i].choices, allow_text = survey.questions[i],allow_text)



# when I did it the wrong way heh
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