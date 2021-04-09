def print_upper_words(words, must_start_with):
	"""
	This should print words that fit the conditional statement
	in ALL UPPER CASE
	"""
	# this should print "HELLO", "HEY", "YO", and "YES"
	if not type(must_start_with) == set:
		print("must_start_with needs to be a set")
		return

	sorted_list = []
	upper_print_string = ""
	for word in words:
		for start in must_start_with:
			if word[0] == start:
				sorted_list.append(word);

	for word in sorted_list:
		upper_print_string += (f'"{word.upper()}", ')

	penultimate_index = len(upper_print_string) - 2
	print(upper_print_string[:penultimate_index])



print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})

# I added that test for a set input because without it 
# both of these worked, and I didn't know if they should
# it'd be easy to remove
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with="hy")

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with=["h", "y"])
