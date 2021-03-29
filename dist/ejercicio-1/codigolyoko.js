"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CL = void 0;
const fighter_1 = require("./fighter");
const pokemon_1 = require("./pokemon");
const marvel_1 = require("./marvel");
class CL extends fighter_1.Figther {
    constructor(name, atk, def, hp, tipo) {
        super(name, atk, def, hp, tipo);
    }
    print() {
        console.log("El ganador es" + this.get_name() + " que pertenece a Codigo Lyoko");
    }
    efi(L1, daño) {
        if (L1 instanceof pokemon_1.Pokemon)
            return daño * 1.2;
        if (L1 instanceof marvel_1.Marvel)
            return daño * 0.7;
        return daño;
    }
}
exports.CL = CL;
