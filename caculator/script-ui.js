const numberUp_container = document.querySelector('#number_up');
const operator_container = document.querySelector("#calculation");
const result_container = document.querySelector("#display");
let result_display = document.createElement("p");
result_display.setAttribute("class", "result");


let arrayShowA = [];
let arrayCalcA = [];

let valueCalcA;


for( i = 0; i< 9; i ++){
    const num_button = document.createElement("div");
    num_button.setAttribute('class', "num_button");
    num_button.setAttribute('id', "num_"+(i+1))
    num_button.style["border-style"] = "solid";
    num_button.style["box-sizing"] = "border-box";

    const num_text = document.createElement("p");
    num_text.textContent = i+1;
    num_text.setAttribute("class", "symbol");

    if(i%2 !== 0){
        num_button.style["background-color"] = "#E3CCAE"
    }
    num_button.appendChild(num_text);

    numberUp_container.appendChild(num_button);
}


function displayValue(value, arrayShow, arrayCalc, valueCalc){
    arrayShow.push(value)
    arrayCalc.push(value)
    result_display.textContent = arrayShow.join("");
    result_container.appendChild(result_display);
    valueCalc = Number(arrayShow.join(""));
    console.log(valueCalc);
}

    const numsInput = document.querySelectorAll(".num_button, #number_zero, #decimal_button");
    //numsInput.forEach(num => num.addEventListener("mousedown", (e) => { console.log(e.target.innerText)}));
    numsInput.forEach(num => num.addEventListener("mousedown", (e) => { displayValue(e.target.innerText,arrayShowA, arrayCalcA, valueCalcA )}));




