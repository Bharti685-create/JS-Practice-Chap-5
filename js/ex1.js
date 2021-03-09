// improved hello

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
let firstName = prompt("Enter your first name")
let lastName = prompt("Enter your last name")

console.log(sayHello(firstName, lastName))