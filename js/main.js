/*************/
// FIND ELEMENTS IN DOM //
/**************/

// by Id

const mainTitle = document.getElementById("main-title");
mainTitle.innerText = "Welcome to Process Trusters";

//by class name

const infoCollection = document.getElementsByClassName("info");

const infoElementsArr = [...infoCollection]; // convert html collection to array
infoElementsArr.forEach((element) =>
  //element.innerText = "NEW CONTACT"
  {
    element.style.color = "blue";
  }
);

//by tag name
const allParagraphsCollection = document.getElementsByTagName("p");
allParagraphsArr = [...allParagraphsCollection];

// by css selectors...
const first = document.querySelector("header h2"); //it only gives the 1st element of the specified class
const all = document.querySelectorAll("header h2"); // gives all elements of the specified class

all.forEach((element) => {
  element.style.color = "green";
});

// context: document vs. element

const allParagraphsInProductsElm = document.querySelectorAll("#products p");

const productsElm = document.getElementById("products");
productsElm.getElementsByTagName("p"); //all p iside the Id "products"


/******** */
/*Properties*/
/******* */

const pikachuElm = document.getElementById("pikachu");
console.log(pikachuElm.innerHTML);

pikachuElm.innerHTML = "<p> THIS IS THE NEW CONTENT </p> <p> SECOND </p>"

// Read/Modify text content --> elm.innerText

const linkElm = document.getElementById("my-link")
linkElm.innerText = ("About us - we are amazing")

//Read/modify style --> elm.style

console.log(mainTitle.style.color);
mainTitle.style.color = "blue"
mainTitle.style.margin = "60px 60px"

// Read/Modifu the id or the class --> elm.id // elm.className
mainTitle.id = "this-is-the-new-id"
mainTitle.className = "title rounded"

// elm.classList (provides methods to access class names)

// - elm.classList.remove("foo")
// - elm.classList.add("new-class")
// - elm.classList.toggle("active") => if you have it, deactivate it. if you don't deactivate it

mainTitle.classList.add("with-shadow")
mainTitle.classList.remove("with-shadow")

mainTitle.classList.toggle("active")

/**************/
/*Attributes*/
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href");
// console.log(result)


// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com");
linkElm.setAttribute("target", "_blank");


// remove: elm.removeAttribute(attrName);



/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element:
const newImg = document.createElement("img")

// step2: add content or modify (ex. innerHTML...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);


/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*
examples of events
  - mouse events (ex. click, mouseover...)
  - keyboard events (ex. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp

elm.addEventListener(typeOfEvent, codeToExecute)
*/

const btn = document.getElementById("button-1")

btn.addEventListener("click", () => {
    console.log("User clicked in btn 1...")
})