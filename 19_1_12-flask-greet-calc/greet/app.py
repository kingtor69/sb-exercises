from flask import Flask

app = Flask(__name__)

html_start = """
  <html>
    <body>
      <h1><i>greet</i> exercise</h1>
"""

html_end = """
    </body>
  </html>
"""

@app.route ('/')
def home():
	"""set up landing page"""
	html = f"""{html_start}
	{html_end}"""
	return html

@app.route('/welcome')
def welcome():
	"""set up blank welcome page"""
	html = f"""{html_start}
	  <h2>welcome</h2>
	{html_end}"""
	return html

@app.route('/welcome/<where>')
def welcome_where(where):
	"""set up responsive welcome page (designed for where to be 'home' or 'back')"""
	html = f"""{html_start}
	  <h2>welcome {where}</h2>
	{html_end}"""
	return html
