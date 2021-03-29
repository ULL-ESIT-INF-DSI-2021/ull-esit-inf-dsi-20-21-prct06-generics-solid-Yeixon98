import {isConvertible} from './conversor';

export class Longitud implements isConvertible<[string, number, string]> {

    constructor(){}

    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'm') {
            if (dato[2] == 'mi') {
                result = parseFloat((dato[1] / 1609).toFixed(3));
            } else if (dato[2] == 'yd') {
                result = parseFloat((dato[1] * 1.094).toFixed(3));
            }
        } else if (dato[0] == 'mi') {
            if (dato[2] == 'yd') {
                result = parseFloat((dato[1] * 1760).toFixed(3));
            } else if (dato[2] == 'm') {
                result = parseFloat((dato[1] * 1609).toFixed(3));
            }
        } else if (dato[0] == 'yd') {
            if (dato[2] == 'm') {
                result = parseFloat((dato[1] * 0.9144).toFixed(3));
            } else if (dato[2] == 'mi') {
                result = parseFloat((dato[1] / 1760).toFixed(3));
            }
        }
        return result;
    }
}