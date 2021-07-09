/**
 * ## Section 1
 * 1. Quantity update with price
 * 2. Adjust price with total
 *
 * ## Section 2
 * 1. Add 5% Tax
 * 2. Adjust with Total
 */

// variables
const caseIncrement = document.getElementById("caseIncrement");
const caseDecrement = document.getElementById("caseDecrement");

caseIncrement.addEventListener("click", () => {
	const caseQuantity = document.getElementById("caseQuantity");
	const caseQuantityNum = parseInt(caseQuantity.value);
	const caseQuantityUpdate = caseQuantityNum + 1;
	caseQuantity.value = caseQuantityUpdate;

	const casePrice = document.getElementById("casePrice");
	const casePriceUpdate = caseQuantityUpdate * 59;
	casePrice.innerText = casePriceUpdate;
});

// caseDecrement
caseDecrement.addEventListener("click", () => {
	const caseQuantity = document.getElementById("caseQuantity");
	const caseQuantityNum = parseInt(caseQuantity.value);

	// if (caseQuantityNum > 0) {
	const caseQuantityUpdate = caseQuantityNum - 1;
	caseQuantity.value = caseQuantityUpdate;

	const casePrice = document.getElementById("casePrice");
	const casePriceUpdate = caseQuantityUpdate * 59;
	casePrice.innerText = casePriceUpdate;
	// }
});
