	html = f"""{html_start}
	<form>
	  <input type="radio" id="add" name="add">
	  <label for="add">Add</label>
	  <input type="radio" id="sub" name="sub">
	  <label for="sub">Subtrack</label>
	  <input type="radio" id="mult" name="mult">
	  <label for="mult">Multiply</label>
	  <input type="radio" id="div" name="div">
	  <label for="div">Divide</label>
	  <input type="number" id="a" name="a">
	  <label for="a">a = </label>
	  <input type="number" id="b" name="b">
	  <label for="b">b = </label>
	</form>
	{html_end}"""

# failed because we haven't learned form handling with flask yet 
# derp