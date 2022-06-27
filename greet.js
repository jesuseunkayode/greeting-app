/* to do steps:
 step 0: create a function with name: sayHello.
 step 1: create two different variables inside the above-mentioned function to store the user's input.
 step 3: get the user's input from the textbox and store inside the variable created above.
 step 4: return the variables with a message for every user: Hello concatenated with the created variables.
 step 5: link the eventlistener to the id to show message.
 step 6: call the function sayHello() inside the eventlistener.


*/



let sayHello = () => {
  let fName = document.getElementById("fname"),
    lName = document.getElementById("lname");
  return (document.getElementById(
    "greetings"
  ).textContent = `Hello ${fName.value}${lName.value}, Thank you for using my greeting web app!`);
};

let greetButton = document.getElementById("greet-button");

greetButton.addEventListener("submit", (event) => {
  event.preventDefault();
});
