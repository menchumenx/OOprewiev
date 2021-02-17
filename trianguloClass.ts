
import {Punto} from "./puntoClass"

export class Triangulo{

//declaracion de propiedades
private vertice_1 : Punto;
private vertice_2 : Punto;
private vertice_3 : Punto;

//constructor
    constructor(punto1:Punto, punto2:Punto, punto3:Punto){
        this.vertice_1 = punto1;
        this.vertice_2 = punto2;
        this.vertice_3 = punto3;
    }

//metodo que devuelve un array de numeros, con tres elementos que nos indicaran la longitor de  
// cada lado del triangulo
    calcularLongitudLados():number[]{

        let p1 : number = this.vertice_1.calcularDistancia(this.vertice_2);
        let p2 : number = this.vertice_2.calcularDistancia(this.vertice_3);
        let p3 : number = this.vertice_3.calcularDistancia(this.vertice_1);

        let lados : number[] = [p1,p2,p3];

        return lados;
    }
}
