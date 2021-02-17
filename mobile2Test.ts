
import {Mobile} from "./mobileClass"

//objetos de Mobile
let nokia_3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", 32, "azul", false, 0, 30);
let iphone_3G : Mobile = new Mobile("iphone3G", "3g", "iphone", 65, "black", false, 1, 800);
let samsung_Galaxy_10 : Mobile = new Mobile("samsungGalaxy", "galaxy10", "samsung", 32, "rosa", true, 2, 890);

let mobiles : Mobile[] = [ nokia_3210, iphone_3G, samsung_Galaxy_10 ];

//impresion por consola las propiedades de cada objeto
console.log(nokia_3210.printProperties());
console.log(iphone_3G.printProperties());
console.log(samsung_Galaxy_10.printProperties())

//modificar propiedades de nokia
nokia_3210.setIg5G(true);
nokia_3210.setCameraNumber(4);

console.log(nokia_3210.getIs5G());
console.log(nokia_3210.getCameraNumber());
console.log(nokia_3210.printProperties());

//impresion todos las propiedades

for (let i = 0; i < mobiles.length; i++){
    mobiles[i].printProperties()
}


