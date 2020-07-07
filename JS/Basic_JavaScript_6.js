function Alcohol_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote=(Age<21) ? "You are to young ":"You are old enough";
    document.getElementById("alcohol").innerHTML=Can_vote + " to purchase alcohol.";
}


function Dog(Breed, Eye, Color, Age) {
    this.Dog_Breed = Breed;
    this.Dog_Eye = Eye;
    this.Dog_Color = Color;
    this.Dog_Age = Age
}
var Eduardo = new Dog("Dauchsund", "Blue", "Black", 2);
var Laarni = new Dog("Husky", "Green", "White", 4.);
var Barbara = new Dog("Yorkie", "Brown", "Brown", 7.);
function myFunction() {
    document.getElementById("Dog_Variety").innerHTML=
    "Barbara has a " + Barbara.Dog_Breed + ". It has  " + Barbara.Dog_Color +
    " coat of fur. It is " + Barbara.Dog_Age;
}


function count_Function() {
    document.getElementById("counting").innerHTML = Count_down();
    function Count_down() {
        var Starting_point = 68;
        function minus_number() {Starting_point -= 21;}
        minus_number();
        return Starting_point;
    }
}