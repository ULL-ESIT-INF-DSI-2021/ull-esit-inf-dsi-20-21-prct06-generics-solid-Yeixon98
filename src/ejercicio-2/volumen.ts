import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de volumen
 */
export class Volumen implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
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