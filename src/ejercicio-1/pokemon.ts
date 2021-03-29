import { Figther } from "./fighter";




export class Pokemon extends Figther{
    constructor(name: string, atk: number, def: number, hp: number, tipo: string){
        super(name,atk,def,hp,tipo);
    }

    print(){
        console.log("El pokemon " + this.get_name() + " ha ganado");
    }

    efi<T extends (Figther)>(L1: T, daño: number):number{
        if(this.get_tipo() === "fuego"){
            if(L1.get_tipo() === "fuego" || L1.get_tipo() === "electrico")
                return daño;
            if(L1.get_tipo() === "agua")
                return 0.5 * daño; 
            if(L1.get_tipo() === "hierba")
                return 2 * daño;
        }
        else if(this.get_tipo() === "agua"){
            if(L1.get_tipo() === "agua")
                return daño;
            if(L1.get_tipo() === "hierba" || L1.get_tipo() === "electrico")
                return 0.5 * daño; 
            if(L1.get_tipo() === "fuego")
                return 2 * daño;
        }
        else if(this.get_tipo() === "hierba"){
            if(L1.get_tipo() === "hierba" || L1.get_tipo() === "electrico")
                return daño;
            if(L1.get_tipo() === "fuego")
                return 0.5 * daño; 
            if(L1.get_tipo() === "agua")
                return 2 * daño;
        }
        else if(this.get_tipo() === "electrico"){
            if(L1.get_tipo() === "electrcio" || L1.get_tipo() === "hierba" || L1.get_tipo() === "fuego")
                return daño;
            if(L1.get_tipo() === "agua")
                return 2 * daño;
        }
    
        //Si el otro no es un pokemon
        return daño * 0.9;
    }
}