"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figther = void 0;
class Figther {
    constructor(name, atk, def, hp, tipo) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
        this.tipo = tipo;
    }
    get_name() {
        return this.name;
    }
    get_atk() {
        return this.atk;
    }
    get_def() {
        return this.def;
    }
    get_hp() {
        return this.hp;
    }
    get_tipo() {
        return this.tipo;
    }
}
exports.Figther = Figther;
