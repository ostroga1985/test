// Худшее время	O(n2)
// Лучшее время	O(n log n)(обычное разделение)
// или O(n)(разделение на 3 части)
// Среднее время	O(n log n)

const swap = require('../kits/swap.js')

const quick = (arr, lo = 0, hi = arr.length - 1) => {
	let l = lo
	let r = hi

	let pivot = arr[(lo + hi) >> 1]

	while (l <= r) {
		while (arr[l] < pivot) l += 1
		while (arr[r] > pivot) r -= 1
		if (l <= r) {
			swap(arr, l, r)

			l += 1
			r -= 1
		}
	}

	if (lo < r) quick(arr, lo, r)
	if (l < hi) quick(arr, l, hi)
}







module.exports = quick