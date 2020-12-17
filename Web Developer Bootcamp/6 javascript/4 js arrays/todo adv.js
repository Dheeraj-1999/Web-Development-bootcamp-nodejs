var input = prompt("New ||  List || Delete || quit ?");
var todo = []
while(input !== "quit") {
    if(input == "New") {
        var ans = prompt("What Todo?")
        todo.push(ans);
    } else if (input == "List") {
        for (var i=0; i<todo.length; i++) {
            console.log(i + " : " + todo[i]);
        }
    } else if(input == "Delete") {
        var index = prompt("enter Index");
        if (index > -1) {
            todo.splice(index, 1);
        }
    } else {
        alert("enter Valid input");
    }
    input = prompt("New ||  List || Delete || quit ?");
}