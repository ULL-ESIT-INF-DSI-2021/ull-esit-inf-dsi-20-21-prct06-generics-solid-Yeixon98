"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperatura = void 0;
class Temperatura {
    constructor() { }
    convert(dato) {
        let result = dato[1];
        if (dato[0] == 'celsius') {
            if (dato[2] == 'fahrenheit') {
                result = parseFloat((dato[1] * 1.8 + 32).toFixed(1));
            }
            else if (dato[2] == 'kelvin') {
                result = parseFloat((dato[1] + 273.15).toFixed(1));
            }
        }
        else if (dato[0] == 'kelvin') {
            if (dato[2] == 'fahrenheit') {
                result = parseFloat((1.8 * (dato[1] - 273.15) + 32).toFixed(1));
            }
            else if (dato[2] == 'celsius') {
                result = parseFloat((dato[1] - 273.15).toFixed(1));
            }
        }
        else if (dato[0] == 'fahrenheit') {
            if (dato[2] == 'kelvin') {
                result = parseFloat(((5 / 9) * (dato[1] - 32) + 273.15).toFixed(1));
            }
            else if (dato[2] == 'celsius') {
                result = parseFloat(((dato[1] - 32) / 1.8).toFixed(1));
            }
        }
        return result;
    }
}
exports.Temperatura = Temperatura;
