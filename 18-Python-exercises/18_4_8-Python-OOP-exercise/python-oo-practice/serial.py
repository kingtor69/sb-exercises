"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__ (self, start):
        self.start = start
        self.serial = start

    def __repr__(self):
        return f"SerialGenerator(start={self.start})"

    def generate(self):
        new_serial = self.serial
        self.serial += 1
        return new_serial

    def reset(self):
        self.serial = self.start
