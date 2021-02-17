
export class Punto {

// declaracion de propiedades
private x : number;
private y : number;

//constructor
    constructor (x:number, y:number){
        this.x = x;
        this.y = y; 
    }

//metodos 
toString(){
   let punto:string;
   return punto = ( "(" + this.x.toString()+ ","+ this.y.toString() + ")")
}
//metodo distancia de origen --> devuelve la distancia del punto al origen de corrd (0,0)
distanciaAlOrigen():number{
    let d:number = 0;
    d = Math.sqrt((this.x * this.x) + (this.y * this.y));
    return d;
}
//calcular distancia entre el punto dado por parametro 
calcularDistancia(punto:Punto):number{
    let d:number = 0;
    d = Math.sqrt( ((punto.x - this.x)*(punto.x - this.x)) + ((punto.y - this.y)*(punto.y - this.y)) );
    return d;
}
// metodo que devuleve el cuadrante en el que se encuentra el punto
calcularCuadrante():number{
    let cuadrante: number = 0;
    if(this.x == 0 || this.y == 0){
        cuadrante = 0;
    }
    else if (this.x > 0 && this.y > 0){
        cuadrante = 1;
    }
    else if (this.x < 0 && this.y > 0){
        cuadrante = 2;
    }
    else if (this.x < 0 && this.y < 0){
        cuadrante = 3;
    }
    else if (this.x > 0 && this.y < 0){
        cuadrante = 4
    }
    return cuadrante;
}

//metodo que recibe como parametro  un array de objetos de clase Punto y que debe comparar cada uno de esos objetos 
//con el punto dado.
calcularMasCercano(puntos:Punto[]):Punto{
    let indice: number = 0;// var para guardar el punto 
    let d : number = this.calcularDistancia(puntos[0]);//var que calcula la distancia del primer elemento del array -->[0]
    //bucle que recorre el array
    for (let i = 0; i < puntos.length; i++){
       //condicional que calcula la distacia del objeto del array con la posicion 0 del array
       //y que dice qu siempre que esta posiciion sea menos que la 0 que se guarde en d y esta a su vez en indice 
       if (this.calcularDistancia(puntos[i]) < d){
            d = this.calcularDistancia(puntos[i]);
            indice = d;
        }
    }
    return puntos[indice];
}


//getters y setters
getX():number{
    return this.x
}
getY():number{
    return this.y
}

setX(x:number){
    this.x = x;
}
setY(y:number){
    this.y = y;
}



}