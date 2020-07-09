function call_Loop() {
    var Digit = "";
    var A = 1;
    while ( A < 16) {
        Digit += "<br>" + A;
        A++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function myFunction() {
    var str = "World of Warcraft";
    var n = str.length;
    document.getElementById("wow").innerHTML = n;
  }

    var Systems = ["Xbox", "Playstation", "Computer", "sSnes", "Nes", "Sega", "Dreamcast"];
    var Stuff = "";
    var A;
    function for_Loop() {
        for (A = 0; A < Systems.length; A++) {
        Stuff += Systems[A] + "<br>";
        }
        document.getElementById("Brands").innerHTML = Stuff;
}

function array_Functions() {
    var Game_opinion = [];
    Game_opinion[0] = "Best system ever.";
    Game_opinion[1] = "Best BluRay player.";
    Game_opinion[2] = "Best bang for your buck.";
    document.getElementById("Game").innerHTML = "The Playstation is the " + Game_opinion[2];
}

function constant_function() {
    const Tv_Set = {brand:"Sony", size:"65 inch", resolution:"4k"};
    Tv_Set.brand = "Sceptre";
    Tv_Set.price = "$300";
    document.getElementById("Constant").innerHTML = "The picture of a " + Tv_Set.brand + " is the best and it cost " + Tv_Set.price;
}

/* Let function */
var A = 21;
document.write("<br>" + A);
{
    let A = 11;
    document.write("<br>" + A);
}
document.write("<br>" + A);
/* End of let function */

let car = {
    make: "Subaru ",
    model: "WRX ",
    color: "Blue ",
    year : "2019 ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this. model;
    }
};
document.getElementById("Car_object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("hello").innerHTML = text;