window.alert(Math.random() *50);

function modulus_operator(){
    var simple_Math = 27 % 6;
    document.getElementById("math").innerHTML =" You divide 27 by 6 and you have a remainder of:" +simple_Math;
}

function multiplication() {
    var Multiplication = 2 * 3;
    document.getElementById("Mul").innerHTML = "2 x 3 = " + Multiplication;
}

function subtraction() {
    var Subtraction = 10 - 3;
    document.getElementById("Sub").innerHTML = "10 - 3 = " + Subtraction;
}
function addition() {
    var Addition = 2 + 3;
    document.getElementById("Add").innerHTML = "2 + 3 = " + Addition;
}

function increment() {
    var X = 9;
    X++;
    document.getElementById("Inc").innerHTML = "9 plus the increment of 1 = " + X;
}

function decrement() {
    var Y = 21;
    Y--;    
    document.getElementById("Dec").innerHTML = "21 decremented by 1 = " + Y;
}