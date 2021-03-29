import {isConvertible} from './conversor';

export class Volumen implements isConvertible<[string, number, string]> {

    constructor(){}

    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'l') {
            if (dato[2] == 'm3') {
                result = parseFloat((dato[1] / 1000).toFixed(3));
            } else if (dato[2] == 'gal') {
                result = parseFloat((dato[1] / 3.785).toFixed(3));
            }
        } else if (dato[0] == 'm3') {
            if (dato[2] == 'gal') {
                result = parseFloat((dato[1] * 264.172).toFixed(3));
            } else if (dato[2] == 'l') {
                result = parseFloat((dato[1] * 1000).toFixed(3));
            }
        } else if (dato[0] == 'gal') {
            if (dato[2] == 'l') {
                result = parseFloat((dato[1] * 3.785).toFixed(3));
            } else if (dato[2] == 'm3') {
                result = parseFloat((dato[1] / 264.172).toFixed(3));
            }
        }
        return result;
    }
}