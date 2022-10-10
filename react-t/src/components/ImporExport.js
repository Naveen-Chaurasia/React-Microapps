




// constants.js
const name = "Reed";

const age = 28;

function getName() {
  return name;   
}

export { name, age };
export default getName;

// app.js
import getName, { name, age } from '../constants.js';

console.log(name, age, getName());


