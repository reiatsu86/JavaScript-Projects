function my_Dictionary(){
    var Family = {
        Mom:"Barbara",
        Dad:"Eduardo",
        Sister:"Angelica",
        Brother:"Michael",
        Wife:"Laarni"
    };
    delete Family.Sister
    document.getElementById("Dictionary").innerHTML = Family.Sister;
}