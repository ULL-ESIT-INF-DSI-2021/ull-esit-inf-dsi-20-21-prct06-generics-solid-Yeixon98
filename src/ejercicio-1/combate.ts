import { CL } from "./codigolyoko";
import { Figther } from "./fighter";
import { Marvel } from "./marvel";
import { Pokemon } from "./pokemon";



export class Combat {
    constructor(public L1: Figther ,public L2: Figther) {
    }

    start(): string{
        let daño1:number = 30 * (this.L1.get_atk()/this.L2.get_def());
        let daño2:number = 30 * (this.L2.get_atk()/this.L1.get_def());
        daño1 = this.L1.efi(this.L2,daño1); 
        daño2 = this.L2.efi(this.L1,daño2); 
        
        let vida1: number = this.L1.get_hp();
        let vida2: number = this.L2.get_hp();


        while (vida1 > 0 && vida2 > 0) {

            console.log(this.L1.get_name() + " ataca a " + this.L2.get_name());
            vida2 -= daño1;
            if(vida2 > 0) 
                console.log(this.L2.get_name() + " tiene " + vida2 +" de vida.");
            else{
                console.log(this.L2.get_name() + " se devilito.")
                this.L1.print();
                return this.L1.get_name();
            }

            if(vida2 > 0){
                console.log(this.L2.get_name() + " ataca a " + this.L1.get_name());
                vida1 -= daño2; 
                if(vida1 > 0) 
                    console.log(this.L1.get_name() + " tiene " + vida1 +" de vida.");
                else{
                    console.log(this.L1.get_name() + " se devilito.")
                    this.L2.print();
                    return this.L2.get_name();
                }
            }
        }
    }
}