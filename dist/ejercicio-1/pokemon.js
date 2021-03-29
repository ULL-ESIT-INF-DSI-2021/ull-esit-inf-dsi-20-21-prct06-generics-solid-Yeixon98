"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
const fighter_1 = require("./fighter");
class Pokemon extends fighter_1.Figther {
    constructor(name, atk, def, hp, tipo) {
        super(name, atk, def, hp, tipo);
    }
    print() {
        console.log("El pokemon " + this.get_name() + " ha ganado");
    }
    efi(L2, daño) {
        if (this.get_tipo() === "fuego") {
            if (L2.get_tipo() === "fuego" || L2.get_tipo() === "electrico")
                return daño;
            if (L2.get_tipo() === "agua")
                return 0.5 * daño;
            if (L2.get_tipo() === "hierba")
                return 2 * daño;
        }
        else if (this.get_tipo() === "agua") {
            if (L2.get_tipo() === "agua")
                return daño;
            if (L2.get_tipo() === "hierba" || L2.get_tipo() === "electrico")
                return 0.5 * daño;
            if (L2.get_tipo() === "fuego")
                return 2 * daño;
        }
        else if (this.get_tipo() === "hierba") {
            if (L2.get_tipo() === "hierba" || L2.get_tipo() === "electrico")
                return daño;
            if (L2.get_tipo() === "fuego")
                return 0.5 * daño;
            if (L2.get_tipo() === "agua")
                return 2 * daño;
        }
        else if (this.get_tipo() === "electrico") {
            if (L2.get_tipo() === "electrcio" || L2.get_tipo() === "hierba" || L2.get_tipo() === "fuego")
                return daño;
            if (L2.get_tipo() === "agua")
                return 2 * daño;
        }
        //Si el otro no es un pokemon
        return daño * 0.9;
    }
}
exports.Pokemon = Pokemon;
