let inputA;
let inputB;
let operator;

function plus(a, b){
return a + b;
};

function minus(a, b){
return a - b;
};

function times(a, b){
return a * b;
};

function divd(a , b){
return Math.round((a/b)*100)/100; //Round the number to 2 decimal number, if needed
};

function operation(a , b , operator){
return operator(a, b);
};


function operatorLocator(input){

if(input === "+"){
    return plus;
}else if(input === "−"){
    return minus;
}else if(input === "×"){
    return times
}else{
    return divd;
}

}