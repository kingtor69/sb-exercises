def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    vowels_only = []
    others = []
    output_string = ''

    for c in s:
        if 'aeiouAEIOU'.count(c) == 1:
            vowels_only.append(c)
            others.append(None)
        else:
            others.append(c)

    vowels_only.reverse()
    vowels_index = 0
    for other in others:
        if other:
            output_string += other
        else:
            output_string += vowels_only[vowels_index]
            vowels_index += 1

    return output_string