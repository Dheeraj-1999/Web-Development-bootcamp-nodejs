var id = document.getElementById("id1"); // will return a object element whode id is "id1"

var classes = document.getElementsByClassName("class1"); // will return "NODE LIST" of element objects
//................................... we can't iterate through node list unlike arrays..............


var tags = document.getElementsByTagName("body"); //return a body object

var querySelectorId = document.querySelector("#id1");
var querySelectorclass = document.querySelector(".class1"); // return first element object not all objects
var querySelectortag = document.querySelector("h1");

var querySelectorAllClass = document.querySelectorAll(".class1"); // return node list of objects

console.log(querySelectorAllClass);