import { CL } from "./codigolyoko";
import { Figther } from "./fighter";
import { Marvel } from "./marvel";
import { Pokemon } from "./pokemon";


export class Pokedex{
    constructor(private luchadores: Figther[]){}

    get_luchadores(): Figther[]{
        return this.luchadores;
    }

    print(){
        this.luchadores.forEach(element => {
            if(element instanceof Pokemon)
                console.log(element.get_name() + "es un Pokemon")
            else if(element instanceof CL)
                console.log(element.get_name() + "es del Universo de Codigo Lyoko")
            else if(element instanceof Marvel)
                console.log(element.get_name() + "es del Universo de Marvel")
        });
    }
}