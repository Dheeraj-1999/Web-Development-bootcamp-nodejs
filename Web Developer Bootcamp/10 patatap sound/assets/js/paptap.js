var CrBwDist = 100
for(var i=0; i<1000; i+=100) { // i down circles 
    for(var j=0; j<1000; j+=100) { // j right side circles
        // var myCircle = new Path.Circle(new Point((j*CrBwDist)+(10*j), (i*CrBwDist)+(10*i)), 10);
        var myCircle = new Path.Circle(new Point(i, j), 10);
        myCircle.fillColor = 'white'   
    }
}

// for(var i=0; i<1000; i++) {
//     var myCircle = new Path.Ca'2114cjlircle(new Point(Math.random()*2000, Math.random()*1000), 5);
//     var r = Math.random()*255;
//     var g = Math.random()*255;
//     var b = Math.random()*255;

//     myCircle.fillColor = "rgb(2*i+(5*i), 200+(i*10), 0)";
//     Math.random()
// }

// var myCircle = new Path.Circle(new Point(15, 30), 10);
// myCircle.fillColor = 'white';
// var myCircle = new Path.Circle(new Point(15, 30+20+10), 10);
// myCircle.fillColor = 'white';
// var myCircle = new Path.Circle(new Point(15, 30+40+20), 10);
// myCircle.fillColor = 'white';
// var myCircle = new Path.Circle(new Point(15, 30+60+30), 10);
// myCircle.fillColor = 'white';