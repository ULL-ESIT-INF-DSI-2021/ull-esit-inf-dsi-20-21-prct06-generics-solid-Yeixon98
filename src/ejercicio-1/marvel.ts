import { Figther } from "./fighter";
import { Pokemon } from "./pokemon";
import { CL } from "./codigolyoko";




export class Marvel extends Figther{
    constructor(name: string, atk: number, def: number, hp: number, tipo: string){
        super(name,atk,def,hp,tipo);
    }

    print(){
        console.log("El ganador es " + this.get_name() + " que pertenece a Marvel");
    }

    efi<T extends (Figther)>(L1: T, daño: number):number{
        if(L1 instanceof Pokemon)
            return daño * 2;
        if(L1 instanceof CL)
            return daño * 1.2;
    
        return daño;
    }
}