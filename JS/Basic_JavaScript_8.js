function precision_Method() {
    var X =12345678.87654321;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Steven loves to play World of Warcraft but Diablo 3 is fun to.";
    var Section = Sentence.slice(21,33);
    document.getElementById("slice").innerHTML = Section;
}

function string_Method() {
    var A =21;
    document.getElementById("String").innerHTML = A.toString();
}