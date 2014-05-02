/*
  Here I use quicksort to sort the array, and a binary search like algorithm to find the
missing value. Both of these algorithms are fast. Quicksort is O(n log(n)), and
binary search is O(log (n)).

To use it, call the function lowTimeTwo(arrayWithMissingVal)

Ex:
var hunds = genArray(3);
var valMissing = lowStorageOne(hunds);
console.log('valMissing', valMissing);

*/

function lowTimeTwo(array){
	var sorted = quickSort(array);
	return binaryFind(sorted);
}

var hundo = genArray(55);
var notThere = lowTimeTwo(hundo);
console.log('notThere', notThere);

// Uses quick sort to sort the array
function quickSort(array){
	// base case: length <= 1, return array
	if(array.length <= 1){
		return array;
	} else {
		var middleI = Math.floor(array.length/2),
				// find store and remove middle element
				middleV = array.splice(middleI,1)[0],
				left = [],
				right = [];
		// build the left and right arrays
		array.forEach(function(val){
			if(val < middleV){
				left.push(val);
			} else {
				right.push(val);
			}
		});
		// reconstruct the array from the returned results
		return quickSort(left).concat([middleV], quickSort(right));
	}
}

// Uses a binary search like algorithm to look for the missing element. When considering
// a middle index, it looks at its adjacent elements to see if a number was skipped.
function binaryFind(items){
	var start = 0,
			end = items.length-1,
			middle,
			midV,
			nextV,
			prevV,
			expected;
	// checks the boundaries first
	if(items[0] != 1) return 1;
	if(items[items.length-1] != items.length + 1) return items.length + 1;
	while(start <= end){
		middle = Math.floor((start+end)/2);
		midV = items[middle];
		expected = middle + 1;
		nextV = items[middle+1];
		prevV = items[middle-1];
		// check adjacent elements to see if a number is skipped
		if(nextV - midV > 1){
			// missing val is just above midV
			return midV + 1;
		} else if (prevV - midV < -1){
			//missing val is just below midV
			return midV - 1;
		}
		if(midV > expected){
			// missing val must be before 'middle' index
			end = middle - 1;
		} else {
			// missing val must be after 'middle' index
			start = middle + 1;
		}
	}
	return -1;
}

// Generates a randomly sorted (for the most part) array. The argument is the missing number.
function genArray(missing){
	var hundo = [];
	for(var i = 1; i <= 100; i++){
		if(i != missing) hundo.push(i);
	}
	hundo.sort(function(){
		return Math.round(Math.random()) - 0.5;
	});
	return hundo
}