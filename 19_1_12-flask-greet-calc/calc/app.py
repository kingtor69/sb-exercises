from flask import Flask, request
from operations import *

app = Flask(__name__)

html_start = """
  <html>
    <body>
      <h1><i>calc</i> exercise</h1>
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

@app.route('/math/<func>')
def math_route(func):
	"""processess the URL and query string 
	collects a and b to send to helper app
	"""
	a = float(request.args['a'])
	b = float(request.args['b'])
	if func == "add":
		symb = "+"
	if func == "sub":
		symb = "-"
	if func == "mult":
		symb = "*"
	if func == "div":
		symb = "/"
	result = eval(func + f"({a}, {b})")

	html = f"""{html_start}
	<h2>{a:g} {symb} {b:g} = {result:g}</h2>
	{html_end}"""

	return html

@app.route('/add')
def add_route():
	"""processess the URL and query string 
	collects a and b to add with helper app
	"""
	a = float(request.args['a'])
	b = float(request.args['b'])
	result = add(a, b)

	html = f"""{html_start}
	<h2>{a:g} + {b:g} = {result:g}</h2>
	{html_end}"""

	return html

@app.route('/sub')
def sub_route():
	"""processess the URL and query string 
	collects a and b to subtract with helper app
	"""
	a = float(request.args['a'])
	b = float(request.args['b'])
	result = sub(a, b)

	html = f"""{html_start}
	<h2>{a:g} - {b:g} = {result:g}</h2>
	{html_end}"""

	return html

@app.route('/mult')
def mult_route():
	"""processess the URL and query string 
	collects a and b to multiply with helper app
	"""
	a = float(request.args['a'])
	b = float(request.args['b'])
	result = mult(a, b)

	html = f"""{html_start}
	<h2>{a:g} * {b:g} = {result:g}</h2>
	{html_end}"""

	return html

@app.route('/div')
def div_route():
	"""processess the URL and query string 
	collects a and b to divide with helper app
	"""
	a = float(request.args['a'])
	b = float(request.args['b'])
	result = div(a, b)

	html = f"""{html_start}
	<h2>{a:g} / {b:g} = {result:g}</h2>
	{html_end}"""

	return html

