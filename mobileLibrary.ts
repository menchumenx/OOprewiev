
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

totalPriceCalculation(){
    let resultado : number = 0;
    for(let i = 0; i < this.mobiles.length; i++){
        resultado = this.mobiles[i].getPrice() + resultado;
    }
    console.log(resultado)

}


}