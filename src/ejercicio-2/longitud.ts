import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de longitud
 */
export class Longitud implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
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