

import {MovileLibrary} from "./mobileLibrary"
import {Mobile} from "./mobileClass"

//objetos de clase Mobile
let nokia_3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", 32, "azul", false, 0, 30);
let iphone_3G : Mobile = new Mobile("iphone3G", "3g", "iphone", 65, "black", false, 1, 800);
let samsung_Galaxy_10 : Mobile = new Mobile("samsungGalaxy", "galaxy10", "samsung", 32, "rosa", true, 2, 890);

let mobiles : Mobile[] = [nokia_3210, iphone_3G, samsung_Galaxy_10];

// objetos de  librery
let ml_1 : MovileLibrary = new MovileLibrary ("the phone hause", "torrejon de ardoz", [nokia_3210, iphone_3G, samsung_Galaxy_10] )

// getters y setters
console.log(ml_1.getName());
console.log(ml_1.getLocation());
console.log(ml_1.getMobiles());

ml_1.setName("mobiles plaza");
console.log(ml_1.getName());

// calcular precio total
ml_1.totalPriceCalculation()