import {isConvertible} from './conversor';

export class Tiempo implements isConvertible<[string, number, string]> {

    constructor(){}

    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'h') {
            if (dato[2] == 'm') {
                result = parseFloat((dato[1] * 60).toFixed(3));
            } else if (dato[2] == 's') {
                result = parseFloat((dato[1] * 3600).toFixed(3));
            }
        } else if (dato[0] == 'm') {
            if (dato[2] == 's') {
                result = parseFloat((dato[1] * 60).toFixed(3));
            } else if (dato[2] == 'h') {
                result = parseFloat((dato[1] / 60).toFixed(3));
            }
        } else if (dato[0] == 's') {
            if (dato[2] == 'h') {
                result = parseFloat((dato[1] / 3600).toFixed(3));
            } else if (dato[2] == 'm') {
                result = parseFloat((dato[1] / 60).toFixed(3));
            }
        }
        return result;
    }
}