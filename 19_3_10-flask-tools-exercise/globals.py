from surveys import surveys
from helpers import survey_size

# initialize global variables
# all are redefined on the landing_page
responses = []
# text_responses = []
survey_key = 'dummy'
active_survey = surveys[survey_key]
(num_questions, columns) = survey_size(active_survey)
# next_question = 0
# question = 0
# survey_done = False
types = []
completed_surveys = [survey_key]