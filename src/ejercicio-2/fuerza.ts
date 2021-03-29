import {isConvertible} from './conversor';

export class Fuerza implements isConvertible<[string, number, string]> {

    constructor(){}

    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'N') {
            if (dato[2] == 'kp')
                result = parseFloat((dato[1] / 9.81).toFixed(3));
        } else if (dato[0] == 'kp') {
            if (dato[2] == 'N') 
                result = parseFloat((dato[1] * 9.81).toFixed(3));
        }
        return result;
    }
}