import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de tiempo
 */
export class Tiempo implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
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