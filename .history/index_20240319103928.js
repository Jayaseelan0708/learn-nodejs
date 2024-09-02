const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order", (size, topping)=>{
    console.log(`Order received ${size} size with ${topping}`)
})
emitter.emit("order", "large", "pop con")