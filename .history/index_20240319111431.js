// const EventEmitter = require('node:events');

// const emitter = new EventEmitter();

// emitter.on("order", (size, topping)=>{
//     console.log(`Order received ${size} size with ${topping}`)
// })
// emitter.emit("order", "large", "pop con")

// const PizzaShop = require ('./pizza-shop');

// const pizzaShop = new PizzaShop();
// pizzaShop.order();
// pizzaShop.displayOrder();

const fs = require('fs');
const fileContent = fs.readFileSync('./hello.txt', 'utf8');
console.log(fileContent)

fs.readFile('./hello.txt', 'utf8', (err, data) => {
    console.log(data)
})