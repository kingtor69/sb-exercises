from random import randint

class WordFinder:
	"""Word Finder: finds random words from a dictionary.

	>>> wtf = WordFinder("words.txt")

    >>> type(wtf.random())
    <class 'str'>

	>>> for i in range(1000):
	...		if ' ' in wtf.random():
	...			print("fail")
	...	print("pass")
	... 
	pass

	>>> for i in range(1000):
	...		if len(wtf.random()) == 0:
	...			print("fail")
	...	print("pass")
	... 
	pass

    >>> food_word = WordFinder("foods.txt")

    >>> type(food_word.random())
    <class 'str'>

    >>> for i in range(10):
    ...		if food_word.random()[0] == "#":
    ...			print("fail")
    ...	print("pass")
    ... 
    pass

    >>> for i in range(10):
    ...		if food_word.random() == "\\n":
    ...			print("faile")
    ...	print("pass")
    ... 
    pass
    """


	def __init__(self, file):
		self.file = file

	def __repr__(self):
		return f"WordFinder({file})"

	def random(self):
		words = open(self.file, "r")
		filtered_words = open("filtered_words.txt", "w")
		line_count = 1
		for line in words:
			if not line[0] == "#" and not line == "\\n":
				filtered_words.write(line)
				line_count += 1
		words.close()
		filtered_words.close()
		filtered_words = open("filtered_words.txt", "r")
		target = randint(1, line_count)
		i = 1
		filtered_words.seek(i)
		for line in filtered_words:
			if i == target:
				word = line.replace('\n', '')
				break
			i+=1
		filtered_words.close()
		return word