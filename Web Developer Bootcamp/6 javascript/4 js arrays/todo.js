var todo = prompt("What yoou wana do?");
toList = []
while(todo !== "quit") {
    if(todo == "list") {
        console.log(toList);
    } else if( todo == "new") {
        var item = prompt("what you wana add!");
        toList.push(item);
    } else {
        // break;
        alert("enter valid input");
    }
    todo = prompt("What you wana do?");
}
alert("Thanku!");

// console.log("Connected!");