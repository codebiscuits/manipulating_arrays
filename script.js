let array = ["hi", "ross", "something", "another thing"]; // initialise array

// push
function addLastElement() {
    let newElement = document.querySelector("#addLastInput").value; // find the user's input string
    if (newElement !== "") { // check input and ignore if empty
        array.push(newElement); // add it to the array
        displayArray(); // call the function that updates the webpage
        document.querySelector("#addLastInput").value = ""; // reset the input field
    }
}

// pop
function removeLastElement() {
    array.pop(); // remove the last element from the array
    displayArray(); // call the function that updates the webpage
}

// unshift
function addFirstElement() {
    let newElement = document.querySelector("#addFirstInput").value; // find the user's input string
    if (newElement !== "") { // check input and ignore if empty
        array.unshift(newElement); // add the new element to the start of the array
        displayArray(); // call the function that updates the webpage
        document.querySelector("#addLastInput").value = ""; // reset the input field
    }
}

// shift
function removeFirstElement() {
    array.shift(); // drop the first element of the array
    displayArray(); // call the function that updates the webpage
}

// splice
function removeSpecificElement() {
    let index = document.querySelector("#spliceInput").value; // find the user's input string
    if (index !== "") { // check input and ignore if empty
        index = parseInt(index); // convert the string value to an integer
        array.splice(index, 1); // remove one item at the specified index
        displayArray(); // call the function that updates the webpage
        document.querySelector("#addLastInput").value = ""; // reset the input field
    }
}

// displayArray
function displayArray() {
    let container = document.querySelector("#arrayElements"); // find the html element that contains all the list items
    container.innerHTML = ""; // clear out whatever was there before

    array.forEach((element) => { // loop through each element of the array
        let newP = document.createElement("P"); // make a new 'p' element
        let i = array.indexOf(element); // get the index position of that list item
        newP.textContent = "Element " + i + ": " + element; // create the display text by concatenating all the stuff
        container.appendChild(newP); // add the item to the displayed list
    })
}

let addLastButton = document.querySelector("#addLastButton");
addLastButton.addEventListener("click", addLastElement);

let removeLastButton = document.querySelector("#removeLastButton");
removeLastButton.addEventListener("click", removeLastElement);

let addFirstButton = document.querySelector("#addFirstButton");
addFirstButton.addEventListener("click", addFirstElement);

let removeFirstButton = document.querySelector("#removeFirstButton");
removeFirstButton.addEventListener("click", removeFirstElement);

let spliceButton = document.querySelector("#spliceButton");
spliceButton.addEventListener("click", removeSpecificElement);

displayArray();
