const numberUp_container = document.querySelector('#number_up');
const operator_container = document.querySelector("#calculation")



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




