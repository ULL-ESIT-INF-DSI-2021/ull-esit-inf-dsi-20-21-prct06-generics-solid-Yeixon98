"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velocidad = void 0;
class Velocidad {
    constructor() { }
    convert(dato) {
        let result = dato[1];
        if (dato[0] == 'm/s') {
            if (dato[2] == 'km/h') {
                result = parseFloat((dato[1] * 3.6).toFixed(3));
            }
            else if (dato[2] == 'mph') {
                result = parseFloat((dato[1] * 2.236936).toFixed(3));
            }
        }
        else if (dato[0] == 'km/h') {
            if (dato[2] == 'm/s') {
                result = parseFloat((dato[1] * 0.277778).toFixed(3));
            }
            else if (dato[2] == 'mph') {
                result = parseFloat((dato[1] * 0.621371).toFixed(3));
            }
        }
        else if (dato[0] == 'mph') {
            if (dato[2] == 'm/s') {
                result = parseFloat((dato[1] * 0.44704).toFixed(3));
            }
            else if (dato[2] == 'km/h') {
                result = parseFloat((dato[1] * 1.609344).toFixed(3));
            }
        }
        return result;
    }
}
exports.Velocidad = Velocidad;
let vel = new Velocidad();
console.log(vel.convert(["km/h", 1, "mph"]));
