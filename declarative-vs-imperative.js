// imperative way
function getTotal(numbers) {
	var total = 0;
	for (var i=0; i<numbers.length; i++) { 
		total=total+numbers[i];
	} return total;
}

// declarative way
function getTotalWithEach(numbers) {
	var total = 0;
	each (numbers, function (number,i) {
			total = total + number;
	}); return total;
}
