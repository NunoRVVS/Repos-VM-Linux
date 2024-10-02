
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";


const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("inside");
div.setAttribute("style", "border: 5px solid black; background: pink;");
    const inside = document.querySelector(".inside");
    const h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = "Im in a div";
    const p2 = document.createElement("p");
    p2.classList.add("p");
    p2.textContent = "Me too";

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(p2);

console.log(container);

// const btn = document.querySelector("#btn");
// only takes one action at a time
// btn.onclick = () => alert("Hello World");

// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// function alertFunction() {
//     alert("Hello World")
// };

// const btn = document.querySelector("#buttons");

// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
//   });

// btn.addEventListener("click", function (e) {
// e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
  