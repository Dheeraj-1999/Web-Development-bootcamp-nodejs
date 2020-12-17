var age = prompt("please Tell Me ur Age!")
if(age < 0) {
    alert("error!");
} else {
    if(age == 21) {
        alert("Happy 21st birthday!");
    } else if(age%2) {
        alert("Odd!");
    }
    if(Math.sqrt(age) % 1 === 0) {
        alert("perfect Square!")
    }
}
