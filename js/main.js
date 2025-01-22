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
const first = document.querySelector("header-h2"); //it only gives the 1st element of the specified class
const all = document.querySelectorAll("header-h2"); // gives all elements of the specified class

all.forEach((element) => {
  element.style.color = "green";
});
