=begin
	For this one, I used insertion sort to sort the array. It's very low storage [O(1)],
because the only data structure that it uses is the passed in array. Time-wise,
though, it's inefficient.

  To find the missing number in the sorted array,  I used a method that also iterates 
through the passed in array without generating any additional data structures, making
it low storage as well.

To use this code call low_storage_2(array_with_missing_val) 

Ex:
hundy = gen_array(80)
missing = low_storage_2(hundy)
puts "missing: #{missing}"
=end

# sorts by moving elements into the correct position of a sorted portion of the array
def insertion_sort(array)
	for i in 1...array.length
		j = i
		# keep going as long as the array isn't sorted
		while j > 0 && array[j-1] > array[j]
			# when the previous element is larger, swap positions with it
			array[j-1], array[j] = array[j], array[j-1]
			j = j - 1
		end
	end
	array
end

# iterates through the array, comparing adjacent elements until the missing number is found.
def find_missing(array)
	# edge cases
	return 1 if array[0] != 1
	return array.length + 1 if array[array.length - 1] != array.length + 1
	array.each_with_index do |el, i|
		# if next element is greater by more than 1, missing number is it minus 1.
		return array[i] + 1 if array[i+1] - array[i] > 1
	end
	# when the array is not missing a number
	return -1;
end

def gen_array(missing)
	array = []
	(1..100).each do |i|
		array << i unless i == missing
	end
	array.shuffle
end

def low_storage_2(array)
	sorted = insertion_sort(array)
	find_missing(sorted)
end

hundy = gen_array(10)
missing = low_storage_2(hundy)
puts "missing: #{missing}"