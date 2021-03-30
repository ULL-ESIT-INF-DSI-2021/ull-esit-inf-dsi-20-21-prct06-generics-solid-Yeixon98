import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de masa
 */
export class Masa implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'kg') {
            if (dato[2] == 'lb') {
                result = parseFloat((dato[1] * 2.20462).toFixed(3));
            } else if (dato[2] == 'oz') {
                result = parseFloat((dato[1] * 35.274).toFixed(3));
            }
        } else if (dato[0] == 'lb') {
            if (dato[2] == 'oz') {
                result = parseFloat((dato[1] * 16).toFixed(3));
            } else if (dato[2] == 'kg') {
                result = parseFloat((dato[1] * 0.453592).toFixed(3));
            }
        } else if (dato[0] == 'oz') {
            if (dato[2] == 'kg') {
                result = parseFloat((dato[1] * 0.0283495).toFixed(3));
            } else if (dato[2] == 'lb') {
                result = parseFloat((dato[1] * 0.0625).toFixed(3));
            }
        }
        return result;
    }
}