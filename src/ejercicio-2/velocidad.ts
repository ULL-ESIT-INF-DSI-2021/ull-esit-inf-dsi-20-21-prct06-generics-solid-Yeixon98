import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de velocidad
 */
export class Velocidad implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
    convert(dato: [string, number, string]): number {
        let result: number = dato[1];
        if(dato[0] == 'm/s') {
            if (dato[2] == 'km/h') {
                result = parseFloat((dato[1] * 3.6).toFixed(3));
            } else if (dato[2] == 'mph') {
                result = parseFloat((dato[1] * 2.236936).toFixed(3));
            }
        } else if (dato[0] == 'km/h') {
            if (dato[2] == 'm/s') {
                result = parseFloat((dato[1] * 0.277778).toFixed(3));
            } else if (dato[2] == 'mph') {
                result = parseFloat((dato[1] * 0.621371).toFixed(3));
            }
        } else if (dato[0] == 'mph') {
            if (dato[2] == 'm/s') {
                result = parseFloat((dato[1] * 0.44704).toFixed(3));
            } else if (dato[2] == 'km/h') {
                result = parseFloat((dato[1] * 1.609344).toFixed(3));
            }
        }
        return result;
    }
}