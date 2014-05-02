=begin
	I chose to use mergesort to sort the array because it's fast, O(n log(n)). It makes some
sacrifices space-wise though, due to the stack that the recursion produces and the additional
arrays (left, right, result) that is uses. I used binary search to find the missing value
because it's fast ( O(log(n)) ), which is due to the fact that each iteration halves 
the number of items to be searched through.

To use this code call low_time_2(array_with_missing_val)

Ex:
hundo = gen_array(8)
missing = low_time_2(hundo)
puts "missing: #{missing}"
=end

def gen_array(missing)
	array = []
	(1..100).each do |i|
		array << i unless i == missing
	end
	array.shuffle
end

# merge two arrays into one, adding the smallest elements first
def merge(left, right)
	left_i = 0
	right_i = 0
	result = []
	while left_i < left.length && right_i < right.length
		# conditional adds the smallest element of either array
		if left[left_i] < right[right_i]
			result << left[left_i]
			left_i += 1
		else
			result << right[right_i]
			right_i += 1
		end
	end
	# constuct the result from the left and right arrays, adding them in the correct order
	return result.concat(left[left_i...left.length]).concat(right[right_i...right.length])
end

# recursively halves the arrays until they're of size 1, using merge to build the sorted
# array as the return values come in from the recursion stack
def merge_sort(array)
	if array.length <= 1
		return array
	else
		middle = (array.length/2).floor
		left = array[0...middle]
		right = array[middle...array.length]
		return merge(merge_sort(left), merge_sort(right));
	end
end

# Uses a binary search like algorithm to look for the missing element. When considering
# a middle index, it looks at its adjacent elements to see if a number was skipped.
def binary_find(array)
	start = 0
  last = array.length - 1
  # checks the boundaries first
  return 1 if array[0] != 1
	return array.length + 1 if array[array.length-1] != array.length + 1
	while start <= last
		middle = ((start + last) / 2).floor
		middle_v = array[middle]
		expected = middle + 1
		next_v = array[middle + 1]
		prev_v = array[middle - 1]
		# check adjacent elements to see if a number is skipped
		if next_v - middle_v > 1
			# missing value is just above middle value
			return middle_v + 1
		elsif prev_v - middle_v < -1
			return middle_v - 1
		end
		if middle_v > expected
			# missing val must be before 'middle' index
			last = middle - 1
		else
			# missing val must be after 'middle' index
			start = middle + 1
		end
	end
	return -1
end

def low_time_2(array)
	sorted = merge_sort(array)
	binary_find(sorted)
end

hunds = gen_array(8)
missing = low_time_2(hunds)
puts "missing: #{missing}"