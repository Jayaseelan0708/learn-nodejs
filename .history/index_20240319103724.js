const EventEmitter = require('node:event');

const emitter = new EventEmitter();

emitter.on("order", ()=>{
    console.log(`Order received`)
})
emitter.emit("order")