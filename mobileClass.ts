
export class Mobile {

//declaracion de atributos
public name:string;
public model:string;
public trademark:string;
public sdsize:number;
public color: string;
public is5G: boolean;
public cameraNumber: number;
public price: number;

// costructor
    constructor(name:string, model:string, trademark:string, sdsize:number, color: string, is5G: boolean, cameraNumber: number, price: number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdsize = sdsize;
        this.color = color;
        this. is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
}