import {isConvertible} from './conversor';

/**
 * Clase que representa unidades de medida de fuerza
 */
export class Fuerza implements isConvertible<[string, number, string]> {

    constructor(){}

    /**
     * Realiza la conversión de unidades
     * @param dato unidad, valor de lo que vamos a camvertir y el 3er attr es a cual convertir
     * @returns El valor convertido
     */
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