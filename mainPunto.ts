
import{Punto} from "./puntoClass"
import{Triangulo} from "./trianguloClass"

//objeto tipo punto
let p_1 : Punto = new Punto (2,2);
let p_2 : Punto = new Punto (4,4);
let p_3 : Punto = new Punto (6,6);

let arr_p : Punto[] =  [p_1, p_2];

//objeto tipo triangulo
let tr_1 : Triangulo = new Triangulo (p_1, p_2, p_3)

/*
 ----------------> METODOS <----------------------
 */

// metodos para Punto 
        console.log(p_1.toString());

        p_1.setX(3);
        p_1.setY(3);

        console.log(p_1.getX());
        console.log(p_1.getY());

        console.log(p_1.distanciaAlOrigen());
        console.log(p_1.calcularDistancia(p_2));

        console.log(p_1.calcularCuadrante());
        console.log(p_1.calcularMasCercano(arr_p));

// metodos para Triangulo
        console.log(tr_1.calcularLongitudLados())
    