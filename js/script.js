document.addEventListener("DOMContentLoaded", function () {
  var plusButtons = document.querySelectorAll(".fa-plus-circle");
  var minusButtons = document.querySelectorAll(".fa-minus-circle");
  var heartButtons = document.querySelectorAll(".fa-heart");
  var trashButtons = document.querySelectorAll(".fa-trash-alt");

  plusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      var count = document.querySelectorAll(".quantity")[index];
      count.textContent = parseInt(count.textContent) + 1;
      updatePrice();
    });
  });

  minusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      var count = document.querySelectorAll(".quantity")[index];
      if (parseInt(count.textContent) > 0) {
        count.textContent = parseInt(count.textContent) - 1;
        updatePrice();
      }
    });
  });

  heartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.style.color = button.style.color === "red" ? "black" : "red";
    });
  });

  trashButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let card = document.querySelector(".list-products");
      let cartItem = document.querySelectorAll(".list-products > .card-body")[
        index
      ];
      card.removeChild(cartItem);
      updatePrice();
    });
  });

  function updatePrice() {
    var prices = document.querySelectorAll(".unit-price");
    var quantities = document.querySelectorAll(".quantity");
    var total = 0;
    prices.forEach((price, index) => {
      const priceValue = parseFloat(price.textContent.replace("$", ""));
      const quantityValue = parseInt(quantities[index].textContent);
      total += priceValue * quantityValue;
    });
    document.querySelector(".total").textContent = total.toFixed(2) + " $";
  }
});
