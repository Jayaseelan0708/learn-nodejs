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

// const fs = require('fs/promises');
// const fileContent = fs.readFileSync('./hello.txt', 'utf8');
// console.log(fileContent)

// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//     console.log(data)
// })

const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, world")
});

server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})