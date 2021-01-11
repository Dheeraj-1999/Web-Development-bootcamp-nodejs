// var CrBwDist = 100
// for(var i=0; i<1000; i+=100) { // i down circles 
//     for(var j=0; j<1000; j+=100) { // j right side circles
//         // var myCircle = new Path.Circle(new Point((j*CrBwDist)+(10*j), (i*CrBwDist)+(10*i)), 10);
//         
//         // myCircle.fillColor = 'white'   
//     }



// Create a centered text item at the center of the view:
// var text = new PointText({
// 	point: view.center,
// 	content: 'Click here to focus and then press some keys.',
// 	justification: 'center',
// 	fontSize: 15
// });

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
    // text.content = 'The ' + event.key + ' key was pressed!';
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    // console.log(r, g, b);
    var circle = new Path.Circle(new Point(Math.random()*1373, Math.random()*674), Math.random()*50);
    circle.fillColor = "rgb(" + r + ", " + g + ", " + b + ")";
}

// function onKeyUp(event) {
//     // When a key is released, set the content of the text item:
//     new Path.Circle(new Point(50, 50), 51).fillColor = "black";
//     new Path.Circle(new Point(50, 50), 2).fillColor = "white";
//     new Path.Circle(new Point(50, 50), 2).fillColor = "blacK";
// }