function addToCart() {
  var planSelect = document.getElementById('planSelect');
  var selectedPlan = planSelect.options[planSelect.selectedIndex].text;
  alert('Added ' + selectedPlan + ' to cart!');
}

function updatePrice() {
  var planSelect = document.getElementById('planSelect');
  var priceElement = document.getElementById('price');
  var price = 0;

  switch (planSelect.value) {
    case 'basic':
      price = 10;
      break;
    case 'standard':
      price = 20;
      break;
    case 'premium':
      price = 30;
      break;
    default:
      price = 0;
  }

  priceElement.innerHTML = 'Price: $' + price.toFixed(2);
}

window.onload = function() {
  updatePrice(); // Update price on page load
}
