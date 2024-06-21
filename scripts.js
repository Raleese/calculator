function operate (operator, nr1, nr2){
    if (operator == "*"){
        NUM1 = nr1*nr2;
        NUM2 = 0;
    }
    else if (operator == "/"){
        NUM1 = nr1/nr2;
        NUM2 = 0;
    }
    else if (operator == "+"){
        NUM1 = nr1+nr2;
        NUM2 = 0;
    }
    else if (operator == "-"){
        NUM1 = nr1-nr2;
        NUM2 = 0;
    }
    display.textContent = NUM1;
}

function clickedNum (button){
    if (OPERATOR == "NONE"){
        NUM1 = Number(button.textContent);
        display.textContent = NUM1;
    }
    else{
        NUM2 = Number(button.textContent);
        display.textContent = NUM2;
    }
}

function clickedOperator (button){
    if (button.textContent == "="){
        operate(OPERATOR, NUM1, NUM2);
    }
    else if (button.textContent == "C"){
        NUM1 = NUM2 = 0;
        OPERATOR = "NONE";
        display.textContent = "0"
    }
    else{
        if (OPERATOR == "NONE") OPERATOR = button.textContent;
        else if (OPERATOR != "NONE"){
            if (NUM2 != 0) operate(OPERATOR, NUM1, NUM2);
            OPERATOR = button.textContent;
        }
    }
}

const display = document.querySelector(".text");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".action");

let NUM1 = 0;
let NUM2 = 0;
let OPERATOR = "NONE";

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", () => {clickedNum(numbers[i])});
}

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", () => {clickedOperator(operators[i])});
}