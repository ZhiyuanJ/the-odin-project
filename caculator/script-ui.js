const numberUp_container = document.querySelector("#number_up");
const operator_container = document.querySelector("#calculation");
const result_container = document.querySelector("#display");

const cleanButton = document.querySelector("#clear");
let result_display = document.createElement("p");
result_display.setAttribute("class", "result");

let displayArrayA = [];
let storeArrayA = []
let valueA = new Number;

let displayArrayB = [];
let storeArrayB = []
let valueB = new Number;

let opStatus = false; //Detect the status of the calculator,
                    //If false, the calculator not ready to calc
                    //Only after press operation button, it turns true.
let currOperator = new String;

for (i = 0; i < 9; i++) {
  const num_button = document.createElement("div");
  num_button.setAttribute("class", "num_button");
  num_button.setAttribute("id", "num_" + (i + 1));
  num_button.style["border-style"] = "solid";
  num_button.style["box-sizing"] = "border-box";

  const num_text = document.createElement("p");
  num_text.textContent = i + 1;
  num_text.setAttribute("class", "symbol");

  if (i % 2 !== 0) {
    num_button.style["background-color"] = "#E3CCAE";
  }
  num_button.appendChild(num_text);

  numberUp_container.appendChild(num_button);
}

function displayValue(valueInput, array) {
  array.push(valueInput);
  result_display.textContent = array.join("");
  result_container.appendChild(result_display);
}

function storeValue(valueInput, type){
  if(type === "A"){
    storeArrayA.push(valueInput);
    valueA = Number(storeArrayA.join(""));
  }else{
    storeArrayB.push(valueInput)
    valueB = Number(storeArrayB.join(""));
  }


}

function cleanDisplay() {
  result_container.innerHTML = "";
  opStatus = false;
  displayArrayA = [];
  storeArrayA = [];
  valueA = new Number;

  displayArrayB = [];
  storeArrayB = [];
  valueB = new Number;

}

function operatorInstruction(e){
  opStatus = !opStatus;
  currOperator = e.target.innerText;
  result_container.innerHTML = "";
}

const numsInput = document.querySelectorAll(
  ".num_button, #number_zero, #decimal_button"
);
const opertInput = document.querySelectorAll(
  ".calc_button"
);

opertInput.forEach(operator => operator.addEventListener("mousedown", (e) => {operatorInstruction(e)}));


//numsInput.forEach((num) =>num.addEventListener("mousedown", (e) => {displayValue(e.target.innerText, displayArrayA);}));
//numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {storeValue(e.target.innerText, "A")}));

cleanButton.addEventListener("mousedown", cleanDisplay);


if(opStatus){
  numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {displayValue(e.target.innerText, displayArrayB);}));
  numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {storeValue(e.target.innerText, "B")}));
}else{
  numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {displayValue(e.target.innerText, displayArrayA);}));
  numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {storeValue(e.target.innerText, "A")}));
}