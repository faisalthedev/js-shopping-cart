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
const phoneIncrement = document.getElementById("phoneIncrement");
const phoneDecrement = document.getElementById("phoneDecrement");

// Case
caseIncrement.addEventListener("click", () => {
	handleProductChange("case", true, 59);
});
caseDecrement.addEventListener("click", () => {
	handleProductChange("case", false, 59);
});

// Phone
phoneIncrement.addEventListener("click", () => {
	handleProductChange("phone", true, 1219);
});
phoneDecrement.addEventListener("click", () => {
	handleProductChange("phone", false, 1219);
});

// Price update function
function handleProductChange(product, isIncrease, price) {
	const productQuantity = document.getElementById(product + "Quantity");
	const productQuantityNum = parseInt(productQuantity.value);
	let productQuantityUpdate = productQuantityNum;

	if (isIncrease == true) {
		productQuantityUpdate = productQuantityNum + 1;
	} else if (isIncrease == false && productQuantityNum > 0) {
		productQuantityUpdate = productQuantityNum - 1;
	}

	productQuantity.value = productQuantityUpdate;

	const productPrice = document.getElementById(product + "Price");
	const productPriceUpdate = productQuantityUpdate * price;
	productPrice.innerText = productPriceUpdate;
}
