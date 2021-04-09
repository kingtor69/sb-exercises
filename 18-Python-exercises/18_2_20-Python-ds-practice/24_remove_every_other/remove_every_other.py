def remove_every_other(lst):
	"""Return a new list of every other item.

		>>> lst = [1, 2, 3, 4, 5]

		>>> remove_every_other(lst)
		[1, 3, 5]

	This should return a list, not mutate the original:

		>>> lst
		[1, 2, 3, 4, 5]
	"""
	every_other_item = []
	for i in range(len(lst)):
		if i % 2 == 0:
			every_other_item.append(lst[i])
	return every_other_item