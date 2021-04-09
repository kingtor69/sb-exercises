def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """

    # hint: when you read lines of files, there will be a "newline"
    # (end-of-line character) at the end of each line, and you want to
    # strip that off before you print it. Do some research on that!

    with open (filename) as file:
        read_data = file.read()

    output_string = """"""
    new_line = True
    for i in range(len(read_data)):
        if new_line:
            output_string += '- '
            new_line = False
        if ord(read_data[i]) == 10:
            new_line = True
        output_string += read_data[i]

    print(output_string)