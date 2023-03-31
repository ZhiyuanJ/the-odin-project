const numberUp_container = document.querySelector("#number_up");
const operator_container = document.querySelector("#calculation");
const result_container = document.querySelector("#display");

const cleanButton = document.querySelector("#clear");
let result_display = document.createElement("p");
result_display.setAttribute("class", "result");

const displayArray = {"A":[], "B":[]};
const storeArray ={"A":[], "B":[]};
let values = {}
let operators = {}

let opStatus = false; //Detect the status of the calculator,
                    //If false, the calculator not ready to calc
                    //Only after press operation button, it turns true.

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

function displayValue(valueInput, status) {
  if(!status){
    displayArray.A.push(valueInput);
    result_display.textContent = displayArray.A.join("");
    
  }else{
    displayArray.B.push(valueInput);
    result_display.textContent = displayArray.B.join("");
  }
  result_container.appendChild(result_display);
}

function storeValue(valueInput, status){
  if(!status){
    storeArray.A.push(valueInput);
    values.A = Number(storeArray.A.join(""));
  }else{
    storeArray.B.push(valueInput)
    values.B = Number(storeArray.B.join(""));
  }
}

function cleanDisplay() {
  result_container.innerHTML = "";
  opStatus = false;
  displayArray.A = [];
  storeArray.A = [];

  displayArray.B = [];
  storeArray.B = [];

  values = {}
  operators = {}
}

function operatorInstruction(e){
  let symbol = e.target.innerText;
  if(symbol === "="){
    result = pressEqual();
    result_display.textContent = result;
    stop;
  }else{
    operators.curr = symbol;
    //not complete
  }
  
  opStatus = !opStatus;
  //result_container.innerHTML = "";
}

function pressEqual(){
  if(Object.values(values).length === 2){
    return operation(values.A, values.B, operatorLocator(operators.curr))
  }
}


const numsInput = document.querySelectorAll(".num_button, #number_zero, #decimal_button");
const opertInput = document.querySelectorAll(".calc_button");

numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {displayValue(e.target.innerText, opStatus);}));
numsInput.forEach((num) => num.addEventListener("mousedown", (e) => {storeValue(e.target.innerText, opStatus)}));

cleanButton.addEventListener("mousedown", cleanDisplay);

opertInput.forEach(operator => operator.addEventListener("mousedown", (e) => {operatorInstruction(e)}));