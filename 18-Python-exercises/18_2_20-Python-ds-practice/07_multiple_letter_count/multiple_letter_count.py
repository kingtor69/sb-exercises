def multiple_letter_count(phrase):
	"""Return dict of {ltr: frequency} from phrase.

		>>> multiple_letter_count('yay')
		{'y': 2, 'a': 1}

		>>> multiple_letter_count('Yay')
		{'Y': 1, 'a': 1, 'y': 1}
	"""
	dic = {}
	for char in phrase:
		got_it = False
		for dickey in dic.keys():
			if dickey == char:
				dic[char] += 1
				got_it = True
		if not got_it:
			dic[char] = 1

	return dic