
// DOM Elements for Numbers
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");

// DOM Element for operation

const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const division = document.querySelector(".division");
const multiplication = document.querySelector(".multiplication");
const equals = document.querySelector(".equals");

//DOM Element for other parts
const result = document.querySelector(".result");
const ac = document.querySelector(".AC");
const doubleZero = document.querySelector(".doubleZero");
const percent = document.querySelector(".percent");
const clear  = document.querySelector(".clear");


function append(event){
    result.textContent += event.target.textContent;
}

// These event handler append the clicked number to the result
zero.addEventListener("click", append);
one.addEventListener("click", append);
two.addEventListener("click", append);
three.addEventListener("click", append);
four.addEventListener("click", append);
five.addEventListener("click", append);
six.addEventListener("click", append);
seven.addEventListener("click", append);
eight.addEventListener("click", append);
nine.addEventListener("click", append);
doubleZero.addEventListener("click", append);
percent.addEventListener("click", append);
dot.addEventListener("click", append);

function AC(){
    result.textContent = "";
}


//Need to use better function than eval
function Equals(event){
    try{
        result.textContent = eval(result.textContent);
    } catch{
        result.textContent = "error";
    }
    
}

function Clear(){
    result.textContent = result.textContent.slice(0, result.textContent.length-1);
}

addition.addEventListener("click", append);
subtraction.addEventListener("click", append);
division.addEventListener("click", append);
multiplication.addEventListener("click", append);
clear.addEventListener("click", Clear)
ac.addEventListener("click", AC);
equals.addEventListener("click", Equals);



