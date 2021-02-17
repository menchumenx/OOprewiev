
import {Mobile} from "./mobileClass"

export class MovileLibrary{

//declaracion de propiedades
private name : string;
private location : string;
private mobiles : Mobile[];
private totalPrice : number;

//cosntructor
    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()
    }

//getters y setters
getName():string{
    return this.name;
}
getLocation():string{
    return this.location;
}
getMobiles():Mobile[]{
    return this.mobiles;
}
getTotalPrice():number{
    return this.totalPrice;
}
    //----
setName(name : string){
    this.name = name;
}
setLocation(location : string){
    this.location = location;
}
setMoviles(mobiles : Mobile[]){
    this.mobiles = mobiles;
}
setTotalPrice(totalPrice : number){
    this.totalPrice = totalPrice
}

//  metodo total price
//let mobiles : Mobile[] = [ nokia_3210, iphone_3G, samsung_Galaxy_10 ];

private totalPriceCalculation():number{
    let resultado : number = 0;
    for(let i = 0; i < this.mobiles.length; i++){
        resultado = this.mobiles[i].getPrice() + resultado;
    }
    return resultado
}
pintLibrary(){
   let allM : string= "";
    for (let i = 0; i < this.mobiles.length; i++){
        allM += this.mobiles[i].printProperties()
    }
    console.log("this are all my mobiles" + "\n" + allM + "\n" + "Price overvall: " + this.totalPrice+ "\n" );
}

}