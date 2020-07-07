function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 8 ==Time > 0) {
        Reply = "It is time for some cereal!";
    }
    else if (Time > 8 == Time < 18) {
        Reply = "It is time for a sandwich.";
    }
    else {
        Reply = "it is time for a stake";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


var A = 11;
function Add_numbers_1() {
    var B = 21;
    console.log (79 + B);
}
function Add_numbers_2() {
    console.log(B + A);
}
Add_numbers_1();
Add_numbers_2();