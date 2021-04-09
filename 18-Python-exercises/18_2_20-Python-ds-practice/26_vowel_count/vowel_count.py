def vowel_count(phrase):
	"""Return frequency map of vowels, case-insensitive.

		>>> vowel_count('rithm school')
		{'i': 1, 'o': 2}

		>>> vowel_count('HOW ARE YOU? i am great!')
		{'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
	"""
	dic = {}
	phrase = phrase.lower()
	for char in phrase:
		got_it = False
		if 'aeiou'.count(char) > 0:
			for dickey in dic.keys():
				if dickey == char:
					dic[char] += 1
					got_it = True
			if not got_it:
				dic[char] = 1

	return dic