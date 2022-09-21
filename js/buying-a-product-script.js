// Create a page with an image of some kind of a product like you would see in an e - shop. (You can steal an image from the internet.I won't tell.) Put a button with label Buy underneath the product. When the user clicks on the button display an alert: "Product added to cart".

// Instead of displaying and alert change the label on the button to "In cart".

// Create two different CSS classes for your button so that the button can have a different color when the product is in cart.When the users click on the button, change not only its label but also its class.

// Add a text field beside the buy button to allow the user to input quantity(for example in pieces).When the user clicks the button, its label will change to something like "3 pieces in cart".

// const buttonClick = () => {
//   alert("Product added to cart")
// }

// const buttonClick = () => {
//   document.getElementById('the-button').className = 'buy-button_clicked'
//   document.querySelector('.buy-button_clicked').innerHTML = "Item in cart"
// }

const buttonClick = () => {
  document.getElementById('the-button').className = 'buy-button_clicked'
  const amountInput = document.querySelector('.button-quantity')
  const amount = Number(amountInput.value)
  const buttonText = amount + (amount === 1 ? " item" : " items") + " in cart"
  document.querySelector('.buy-button_clicked').innerHTML = buttonText
}