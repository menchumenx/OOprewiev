
// objetos clase Mobile
import {Mobile} from "./mobileClass"

let nokia_3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", 32, "azul", false, 0, 30);
let iphone_3G : Mobile = new Mobile("iphone3G", "3g", "iphone", 65, "black", false, 1, 800);
let samsung_Galaxy_10 : Mobile = new Mobile("samsungGalaxy", "galaxy10", "samsung", 32, "rosa", true, 2, 890);

// impresiones en consola
console.log(nokia_3210);
console.log(iphone_3G);
console.log(samsung_Galaxy_10);

nokia_3210.is5G = true;
nokia_3210.cameraNumber = 4;

console.log(nokia_3210)
console.log(iphone_3G);
console.log(samsung_Galaxy_10);
