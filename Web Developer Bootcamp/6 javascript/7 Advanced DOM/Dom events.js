var lis = document.querySelector("li");
for( var i=0; i<lis.length; i++) {
    lis[i].addEventListener("click", function() {
      this.style.color = "pink";
    });
  }


var button = document.querySelector("button");
var bd = document.querySelector("body");
button.addEventListener("click", function() {
    bd.classList.toggle("tg");
});
