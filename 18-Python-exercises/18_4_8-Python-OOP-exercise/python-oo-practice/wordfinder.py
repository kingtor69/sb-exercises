from random import randint

class WordFinder:
	"""Word Finder: finds random words from a dictionary.

	>>> wtf = WordFinder("words.txt")

    >>> type(wtf.random())
    <class 'str'>

	>>> ' ' in wtf.random()
	False

	>>> len(wtf.random()) == 0
	False

    >>> food_word = WordFinder("foods.txt")

    >>> type(food_word.random())
    <class 'str'>

    >>> food_word.random()[0] == "#"
    False

    >>> food_word.random() == "\\n"
    False

    >>> len(food_word.random()) > 1
    True
    """


	def __init__(self, file):
		self.file = file

	def __repr__(self):
		return f"WordFinder({file})"

	def random(self):
		words = open(self.file, "r")
		filtered_words = open("filtered_words.txt", "w")
		line_count = 1
		bad_line_starts = ['\\', '#']
		for line in words:
			if not line[0] in bad_line_starts and len(line) > 1:
				filtered_words.write(line)
				line_count += 1
		words.close()
		filtered_words.close()
		filtered_words = open("filtered_words.txt", "r")
		word = None
		while not word:
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