function operate (operator, nr1, nr2){
    nr1 = Number(nr1);
    nr2 = Number(nr2);
    if (operator == "*"){
        NUM1 = nr1*nr2;
        NUM2 = "";
    }
    else if (operator == "/"){
        if (nr2 == 0) nr2 = 1;
        NUM1 = (nr1/nr2).toFixed(2);
        NUM2 = "";
    }
    else if (operator == "+"){
        NUM1 = nr1+nr2;
        NUM2 = "";
    }
    else if (operator == "-"){
        NUM1 = nr1-nr2;
        NUM2 = "";
    }
    display.textContent = NUM1;
}

function clickedNum (button){
    if (OPERATOR == "NONE"){
        NUM1 = NUM1 + button.textContent;
        display.textContent = NUM1;
    }
    else{
        NUM2 = NUM2 + button.textContent;
        display.textContent = NUM2;
    }
}

function clickedOperator (button){
    if (button.textContent == "="){
        operate(OPERATOR, NUM1, NUM2);
    }
    else if (button.textContent == "C"){
        NUM1 = NUM2 = "";
        OPERATOR = "NONE";
        display.textContent = ""
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

let NUM1 = "";
let NUM2 = "";
let OPERATOR = "NONE";

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", () => {clickedNum(numbers[i])});
}

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", () => {clickedOperator(operators[i])});
}