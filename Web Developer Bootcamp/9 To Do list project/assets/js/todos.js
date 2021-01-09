// alert("Connected!")

$("li").on("click", function() {
    $(this).toggleClass("clickedli");
    console.log("clickedLi!");
});