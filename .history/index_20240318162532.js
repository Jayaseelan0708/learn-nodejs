const SuperHero = require('./super-hero');
const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName('Hello');

const superMan = new SuperHero("Super Man");
console.log(superMan.getName());