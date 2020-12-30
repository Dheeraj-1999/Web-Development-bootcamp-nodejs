// alert("I am here!");

var button = document.querySelectorAll("button");
var isPurple = false;
button[0].addEventListener("click", function() {
    if(isPurple) {
        document.body.style.background = "white";
        // isPurple = false;
    } else {
        document.body.style.background = "purple";
    }
    isPurple = !isPurple;
});

button[1].addEventListener("click", function() {
    document.body.classList.toggle("tg");
});