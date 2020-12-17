var input = prompt("Are u there Yet!")
while(input.indexOf("yes") == -1 && input.indexOf("yeah") == -1) {
    input = prompt("Are u there Yet!");
}
alert("Yu Made it!");