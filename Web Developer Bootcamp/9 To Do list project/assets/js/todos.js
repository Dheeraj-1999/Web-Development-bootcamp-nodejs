// alert("Connected!")

$("li").on("click", function() {
    $(this).toggleClass("clickedli");
    console.log("clickedLi!");
});

$(".clicked").on("click", function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    })
    console.log("removedLi!");
    event.stopPropagation();
});