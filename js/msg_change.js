const messages = ["Hello World!", "Hello FEFU!"];
let current = 0;
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const text = document.querySelector(".message");
    current = (current+1) % messages.length;
    text.textContent = messages[current];
});