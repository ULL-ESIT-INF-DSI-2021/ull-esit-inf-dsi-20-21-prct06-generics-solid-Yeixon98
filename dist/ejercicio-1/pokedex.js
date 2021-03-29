"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
const codigolyoko_1 = require("./codigolyoko");
const marvel_1 = require("./marvel");
const pokemon_1 = require("./pokemon");
class Pokedex {
    constructor(luchadores) {
        this.luchadores = luchadores;
    }
    get_luchadores() {
        return this.luchadores;
    }
    print() {
        this.luchadores.forEach(element => {
            if (element instanceof pokemon_1.Pokemon)
                console.log(element.get_name() + "es un Pokemon");
            else if (element instanceof codigolyoko_1.CL)
                console.log(element.get_name() + "es del Universo de Codigo Lyoko");
            else if (element instanceof marvel_1.Marvel)
                console.log(element.get_name() + "es del Universo de Marvel");
        });
    }
}
exports.Pokedex = Pokedex;
