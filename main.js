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

	calculateTotal();
}

// Calculate Total
function calculateTotal() {
	const subTotal = document.getElementById("subTotal");
	const tax = document.getElementById("tax");
	const total = document.getElementById("total");

	const phoneCount = getInputValue("phone");
	const caseCount = getInputValue("case");

	const totalPrice = phoneCount * 1219 + caseCount * 59;
	subTotal.innerText = totalPrice;

	const taxTotal = totalPrice * 0.05;
	tax.innerText = taxTotal.toFixed(2);

	const totalFinal = totalPrice + taxTotal;
	total.innerText = totalFinal.toFixed(2);
}

// Get Product quantity
function getInputValue(product) {
	const productInput = document.getElementById(product + "Quantity");
	const productCount = parseInt(productInput.value);
	return productCount;
}
