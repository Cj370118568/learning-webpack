import addContent from "./add-content.js";
import calculator from "./calculator.js";
document.write("My first Webpack app.<br/>");
addContent();

const sum = calculator.add(3, 4);
console.log(sum);
