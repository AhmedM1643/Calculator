let Result = document.querySelector(".Result");
const Button1 = document.getElementById("One");
const Button2 = document.getElementById("Two");
const Button3 = document.getElementById("Three");
const Button4 = document.getElementById("Four");
const Button5 = document.getElementById("Five");
const Button6 = document.getElementById("Six");
const Button7 = document.getElementById("Seven");
const Button8 = document.getElementById("Eight");
const Button9 = document.getElementById("Nine");
const Zero = document.getElementById("Zero");
const Point = document.getElementById("Point");
const Equal = document.getElementById("Equal");
const Clear = document.getElementById("Clear");
const Add = document.getElementById("Add");
const Multiply = document.getElementById("Multiply");
const Minus = document.getElementById("Minus")

let Result1 = 0;
let Result2 = 0;
let Adding = 0;
let Operator = "none";
let Operation = 0;
let E = false

function Clicked(number) {

    console.log("Button Clicked");

    if (E === false) {

        if (Result.value.length <= 14) {

            if (Result.value === "0") {

                Result.value = ""
                
            }
            
            if (Adding === 0) {
                Result.value += number.textContent;
                Result1 = Result.value;
                console.log(Result1);
            }
    
            if (Adding === 1) {
                Result.value += number.textContent;
                Result2 = Result.value;
                console.log(Result2)
            }
     
        } 
    } 

    else {
        if (Operator != "none") {
            Result2 = Result.value
            Result.value = Result2;
        }
        E = false;
    }
}

function Added(operator) {
    if (Result1 != 0) {
        Adding = 1; 
        Operator = operator
        Result.value = "0";
        
    }
}

function Equals() {
    if (Adding === 1 && Operator === "Add") {
        console.log(parseInt(Result1)+parseInt(Result2))
        Operation = parseInt(Result1)+parseInt(Result2)
        Result.value = Operation;
        E = true;
        Adding = 0;
        Result1 = Operation
        Operator = "none";
    }

    if (Adding === 1 && Operator === "Times") {
        console.log(parseInt(Result1)*parseInt(Result2))
        Operation = parseInt(Result1)*parseInt(Result2)
        Result.value = Operation;
        E = true;
        Adding = 0;
        Result1 = Operation
        Operator = "none";
    }

    
    if (Adding === 1 && Operator === "Division") {
        console.log(parseInt(Result1)/parseInt(Result2))
        Operation = parseInt(Result1)/parseInt(Result2);
        Result.value = Operation;
        E = true;
        Adding = 0;
        Result1 = Operation
        Operator = "none";
    }

    if (Adding === 1 && Operator === "Minus") {
        console.log(parseInt(Result1)-parseInt(Result2))
        Operation = parseInt(Result1)-parseInt(Result2);
        Result.value = Operation;
        E = true;
        Adding = 0;
        Result1 = Operation
        Operator = "none";
    }
}

function Clearing() {
    Result1 = 0;
    Result2 = 0;
    Operation = 0;
    Adding = 0;
    Result.value = "0";
}

Button1.addEventListener("click", () => {Clicked(Button1)}) 
Button2.addEventListener("click", () => {Clicked(Button2)}) 
Button3.addEventListener("click", () => {Clicked(Button3)}) 
Button4.addEventListener("click", () => {Clicked(Button4)}) 
Button5.addEventListener("click", () => {Clicked(Button5)}) 
Button6.addEventListener("click", () => {Clicked(Button6)}) 
Button7.addEventListener("click", () => {Clicked(Button7)}) 
Button8.addEventListener("click", () => {Clicked(Button8)}) 
Button9.addEventListener("click", () => {Clicked(Button9)}) 
Zero.addEventListener("click", () => {Clicked(Zero)}) 

Add.addEventListener("click", () => {Added("Add")}) 
Multiply.addEventListener("click", () => {Added("Times")})
Point.addEventListener("click", () => {Added("Division")})
Equal.addEventListener("click", () => {Equals()})
Clear.addEventListener("click", () => {Clearing()})
Minus.addEventListener("click", () => {Added("Minus")})