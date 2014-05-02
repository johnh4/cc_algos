Hi!

For my 4 solutions, I wrote 2 in JavaScript (one optimized for time, and one for storage) and 2 in Ruby (one optimized for time, one for storage).

###Time 1: Ruby Solution - Mergesort and binary search.
I chose to use mergesort to sort the array because it's fast, O(n log(n)). It makes some
sacrifices space-wise though, due to the stack that the recursion produces and the additional
arrays (left, right, result) that is uses. I used binary search to find the missing value
because it's fast ( O(log(n)) ), which is due to the fact that each iteration halves 
the number of items to be searched through.

To use this code call 
    
    low_time_1(array_with_missing_val)

Ex:  

    hundo = gen_array(8)  
    missing = low_time_1(hundo)  
    puts "missing: #{missing}"


###Time 2: JavaScript Solution - Quicksort and binary search.
Here I use quicksort to sort the array, and a binary search like algorithm to find the
missing value. Both of these algorithms are fast. Quicksort is O(n log(n)), and
binary search is O(log (n)).

To use it, call the function 

    lowTimeTwo(arrayWithMissingVal)

Ex:


    var hunds = genArray(3);
    var valMissing = lowTimeTwo(hunds);
    console.log('valMissing', valMissing);


###Storage 1: Ruby Solution - Insertion sort and Iteration

For this one, I used insertion sort to sort the array. It's very low storage [O(1)],
because the only data structure that it uses is the passed in array. Time-wise,
though, it's inefficient.

  To find the missing number in the sorted array,  I used a method that also iterates 
through the passed in array without generating any additional data structures, making
it low storage as well.

To use this code call 

    low_storage_1(array_with_missing_val) 

Ex:

    hundy = gen_array(80)
    missing = low_storage_1(hundy)
    puts "missing: #{missing}"


###Storage 2: JavaScript Solution - Bubble sort and Iteration

I chose to sort via bubble sort, because it doesn't create any data structures and 
will be very low storage. This makes it O(1). The function that I use to then find the 
missing values will be low storage for the same reason.

To use it, call the function 

    lowStorageTwo(arrayWithMissingVal)

Ex:

    var hunds = genArray(3);
    var valMissing = lowStorageTwo(hunds);
    console.log('valMissing', valMissing);