import { Figther } from "./fighter";




export class DC extends Figther{
    constructor(name: string, atk: number, def: number, hp: number, tipo: string){
        super(name,atk,def,hp,tipo);
    }

    print(){
        console.log("El ganador es" + this.get_name());
    }

    efi(){
        
    }
}