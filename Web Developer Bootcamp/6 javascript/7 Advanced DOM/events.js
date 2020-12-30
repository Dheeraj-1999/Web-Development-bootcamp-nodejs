var button = document.querySelectorAll("button");
var paragraph = document.querySelectorAll("p");

console.log(paragraph.textContent);


button.addEventListener("click", function()  {
    paragraph.textContent = "changed!";
});