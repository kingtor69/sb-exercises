const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];

const firstOver75 = scores.find(score=>{
    return score > 75;
});

const firstExtraCredit = scores.find(score=>{
    return score > 100;
});

const firstEvenScore = scores.find(score=>{
    return score % 2 === 0;
})

const firstNonZeroEvenScore = scores.find(score=>{
    return score !== 0 && score % 2 === 0;
});

const firstNonZeroEvenIndex = scores.findIndex(score=>{
    return score !== 0 && score % 2 === 0;
});

// how to split an index into an over/under kinda thing
// assumes a sorted array, like the one we're using here:
function partition (arr, pivot) {
    const pivotIdx = arr.findIndex(el=>{
        return el > pivot;
    });
	const less = arr.slice(0, pivotIdx);
	const more = arr.slice(pivotIdx);
	return [less, more];
};

// curiousity:
function partitionFilter (arr, pivot) {
	const less = arr.filter(num => {
		return num <= pivot;
	});
	const more = arr.filter(num => {
		return num > pivot;
	});
	return [less, more];
}

// write-yer-own:
function myFind (arr, callback) {
	for (i=0; i<arr.length; i++) {
		if (callback(arr[i], i, arr)) return arr[i];
	}
}

function myFindIndex (arr, callback) {
	for (i=0; i<arr.length; i++) {
		if (callback(arr[i], i, arr)) return i;
	}
	return -1;
}