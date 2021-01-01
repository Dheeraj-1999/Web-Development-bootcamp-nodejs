// **********************************************************************************************
// giving Colors to squares
var colors = giveColorRandom(6);
console.log(colors);
var squares = document.querySelectorAll(".square");

// *********************************************************************************    
// message to be printed
var messageDisp = document.querySelector("#message");

for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];


    // ******************************************************************************
    // hit event on clicking the square..;./.....;...........................
    squares[i].addEventListener("click", function() {
        if(this.style.backgroundColor !== pickedColor) {
            this.style.backgroundColor = "black";
            messageDisp.textContent = "TryAgain!"
            // this.classList.add("wrongSelected");
        } else {
            messageDisp.textContent= "Correct!";
            changeColors();
            giveHColor();
            newColors.textContent = "Play Again!";
            
        }
    });
}
var h1 = document.querySelector("h1");
function giveHColor() {
    
    h1.style.background = pickedColor;
}

function changeColors() {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

// ******************************************************************************
// logic behind picked color
var pickedColor = pickColorRandom();
var pickedColorDisp = document.getElementById("pickedColor");
pickedColorDisp.textContent = pickedColor;



// **********************************************************************************
// Button New Colors!
var newColors = document.querySelector("#reset");
newColors.addEventListener("click", function() {
    colors = giveColorRandom(6);
    pickedColor = pickColorRandom();
    pickedColorDisp.textContent = pickedColor;
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#232323";

});



function pickColorRandom() {
    var random = Math.floor(Math.random()*squares.length);
    console.log(random);
    return  colors[random];
}

function giveColorRandom(numbers) {
    colors = []
    
    for (var i=0; i<numbers; i++) {
        var r = Math.floor(Math.random()*255+1);
        var g = Math.floor(Math.random()*255+1);
        var b = Math.floor(Math.random()*255+1);
        var color = "rgb(";
        color += r + ", " + g + ", " + b + ")";
        colors.push(color);
    }
    return(colors);
}
