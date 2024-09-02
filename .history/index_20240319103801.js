const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order", ()=>{
    console.log(`Order received`)
})
emitter.emit("order")