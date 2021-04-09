def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    def frequency(num):
    	num_str = str(num)
    	lst = list(num_str)
    	empty_dic = {}
    	dic = empty_dic.fromkeys(lst)
    	for char in lst:
    		if (not dic[char]):
    			dic[char] = 1
			else:
				dic[char] += 1
    		print (dic[char])

    		# dic[char] = 1 if (not dic[char]) else dic[char] += 1

    	return dic

    return frequency(num1) == frequency(num2)