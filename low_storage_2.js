/*
I chose to sort via bubble sort, because it doesn't create any data structures and 
will be very low storage. This makes it O(1). The function that I use to then find the 
missing values will be low storage for the same reason.

To use it, call the function lowStorageTwo(arrayWithMissingVal)

Ex:
var hunds = genArray(3);
var valMissing = lowStorageTwo(hunds);
console.log('valMissing', valMissing);

*/

function lowStorageTwo(array){
	bubbleSort(array);
	return findMissing(array);
}

var hunds = genArray(3);
var valMissing = lowStorageTwo(hunds);
console.log('valMissing', valMissing);

// iterates through the array, comparing adjacent elements until the missing number is found.
function findMissing(array){
	// edge cases
	if(array[0] != 1) return 1;
	if(array[array.length - 1] != array.length + 1) return array.length + 1;
	for(var i = 1; i < array.length; i++){
			// if next element is greater by more than 1, missing number is it minus 1.
			if(array[i] - array[i-1] > 1) return array[i-1] + 1;
	}
	// when the array is not missing a number
	return -1;
}

// Compares adjacent values, swapping higher ones for lower ones until the array is sorted. 
function bubbleSort(array){
	var swapped = true,
			temp;
	while(swapped){
		swapped = false;
		for(var i = 1; i < array.length; i++){
			if(array[i-1] > array[i]){
				// make the swap
				temp = array[i-1];
				array[i-1] = array[i];
				array[i] = temp;
				swapped = true;
			}
		}
	}
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