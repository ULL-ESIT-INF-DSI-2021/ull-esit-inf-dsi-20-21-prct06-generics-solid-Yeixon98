import { Figther } from "./fighter";
import { Pokemon } from "./pokemon";
import { Marvel } from "./marvel";



export class CL extends Figther{
    constructor(name: string, atk: number, def: number, hp: number, tipo: string){
        super(name,atk,def,hp,tipo);
    }

    print(){
        console.log("El ganador es" + this.get_name() + " que pertenece a Codigo Lyoko");
    }

    efi<T extends (Figther)>(L1: T, daño: number):number{
        if(L1 instanceof Pokemon)
            return daño * 1.2;
        if(L1 instanceof Marvel)
            return daño * 0.7;
        
        return daño;
    }
}