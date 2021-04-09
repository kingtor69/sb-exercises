def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    phrase_lower = phrase.lower()
    phrase_compare = ""
    for char in phrase_lower:
        if not char == ' ':
            phrase_compare += char
    for i in range(len(phrase_compare)//2 + 1):
        if not phrase_compare[i] == phrase_compare[len(phrase_compare) - (i+1)]:
            return False
    return True