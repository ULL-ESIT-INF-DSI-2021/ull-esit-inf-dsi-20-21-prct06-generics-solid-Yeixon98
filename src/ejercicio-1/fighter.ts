


export abstract class Figther{

    constructor(private readonly name: string, 
                private readonly atk: number,
                private readonly def: number,
                private readonly hp: number,
                private readonly tipo: string)
    {}

    get_name(){
        return this.name;
    }
    get_atk(){
        return this.atk;
    }
    get_def(){
        return this.def;
    }
    get_hp(){
        return this.hp;
    }
    get_tipo(){
        return this.tipo;
    }
    
    abstract print(): void;

                            // Pokemon | CL | Marvel
    abstract efi<T extends (Figther)>(L1: T, daño: number):number;
}