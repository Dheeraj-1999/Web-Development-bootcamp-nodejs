var generate = require("faker");


for(var i=0; i<10; i++) {
    console.log(generate.commerce.productName() + " - $" + generate.commerce.price());
}
