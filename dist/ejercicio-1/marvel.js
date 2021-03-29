"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marvel = void 0;
const fighter_1 = require("./fighter");
const pokemon_1 = require("./pokemon");
const codigolyoko_1 = require("./codigolyoko");
class Marvel extends fighter_1.Figther {
    constructor(name, atk, def, hp, tipo) {
        super(name, atk, def, hp, tipo);
    }
    print() {
        console.log("El ganador es" + this.get_name() + " que pertenece a Marvel");
    }
    efi(L1, daño) {
        if (L1 instanceof pokemon_1.Pokemon)
            return daño * 2;
        if (L1 instanceof codigolyoko_1.CL)
            return daño * 1.2;
        return daño;
    }
}
exports.Marvel = Marvel;
