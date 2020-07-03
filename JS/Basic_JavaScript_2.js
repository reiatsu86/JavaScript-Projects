function person_people(){
    var girl = "I am a girl, ";
    var girl = girl.fontcolor("pink");
    var boy = "I am a boy, ";
    var boy = boy.fontcolor("blue")

    var girlboy = girl;
    girlboy += boy;
    girlboy += "It maybe?"
    document.getElementById("person").innerHTML = girlboy;
}