let totalAmount = 0;
let itemCount = 0;

function addToCart(price) {
  totalAmount += price;
  itemCount++;
  document.querySelector(".total-amount").innerText =
    totalAmount.toFixed(2);
  document.querySelector(".cart-count").innerText = itemCount;
}

function conformOrder() {
  totalAmount = 0;
  itemCount = 0;
  document.querySelector(".total-amount").innerText =
    totalAmount.toFixed(2);
  document.querySelector(".cart-count").innerText = itemCount;
  alert("You Order Booked Successfully.!")
}
