/* to do steps:
 step 0: query the html element where the text content will display.
 step 1: add event listener to the button or element that will perform the action.
 step 3: prevent default behaviour of the browser.
 step 4: link the function sayhello to element to show the message.
 step 5: create a function and add two variables to handle the user's input.
 step 6: return your message inside the function.
*/

let greetButton = document.getElementById("greet-button");
greetButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("greetings").textContent = sayHello();
});

const sayHello = () => {
  let fName = document.getElementById("fname"),
    lName = document.getElementById("lname");
  return `Hello ${fName.value} ${lName.value}, Thank you for using my greeting web app!`;
};
