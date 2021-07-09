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
	handleProductChange(true);
});
caseDecrement.addEventListener("click", () => {
	handleProductChange(false);
});

// Increment & Decrement function
function handleProductChange(isIncrease) {
	const caseQuantity = document.getElementById("caseQuantity");
	const caseQuantityNum = parseInt(caseQuantity.value);
	let caseQuantityUpdate = caseQuantityNum;

	if (isIncrease == true) {
		caseQuantityUpdate = caseQuantityNum + 1;
	} else if (isIncrease == false && caseQuantityNum > 0) {
		caseQuantityUpdate = caseQuantityNum - 1;
	}

	caseQuantity.value = caseQuantityUpdate;

	const casePrice = document.getElementById("casePrice");
	const casePriceUpdate = caseQuantityUpdate * 59;
	casePrice.innerText = casePriceUpdate;
}
