def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    balance = 0
    for paren in parens:
        if ord(paren) == 40:
            balance += 1
        if ord(paren) == 41:
            balance -= 1
        if balance < 0:
            return False

    return balance == 0