//variables to be used in order to build the list
const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

//function that will manage the input logic
btn.addEventListener("click", () => {
    const item = input.value;
    input.value = '';
//variables witht the elements that will be used to give and action 
//whenever we insert something in the input area
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");
//this will be what comes ahead of the input insertion
    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);
//this will be the function that will erase whatever item we 
//inserted in input
    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    
    input.focus();
});

