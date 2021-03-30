
/**
 * Interfaz que nos permite realizar conversiones de unidades
 * @function convert Realiza la conversión de unidades
 */
export interface isConvertible<T> {
    convert(dato: T): number;
}