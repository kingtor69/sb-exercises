def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    totb = None
    for num in nums:
    	if not totb:
    		totb = num
    	elif nums.count(num) > nums.count(totb):
    		totb = num
    return totb