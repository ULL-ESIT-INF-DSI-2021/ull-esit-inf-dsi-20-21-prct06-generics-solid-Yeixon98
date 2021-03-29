import 'mocha';
import {expect} from 'chai';
import {Fuerza} from '../src/ejercicio-2/fuerza';
import {Longitud} from '../src/ejercicio-2/longitud';
import {Masa} from '../src/ejercicio-2/masa';
import {Temperatura} from '../src/ejercicio-2/temperatura';
import {Tiempo} from '../src/ejercicio-2/tiempo';
import {Velocidad} from '../src/ejercicio-2/velocidad';
import {Volumen} from '../src/ejercicio-2/volumen';

describe('Conversor de Unidades', () => {
    let fuerza = new Fuerza();
    let long = new Longitud();
    let masa = new Masa();
    let temp = new Temperatura();
    let tiempo = new Tiempo();
    let vel = new Velocidad();
    let vol = new Volumen();
    
    it("10 Neuton a Kilopondio" , () => {
        expect(fuerza.convert(["N",10,"kp"])).to.eql(1.019);
    });
    it("10 Milla a Metros" , () => {
        expect(long.convert(["mi",10,"m"])).to.eql(16090);
    });
    it("10 Libra a Kilogramo" , () => {
        expect(masa.convert(["lb",10,"kg"])).to.eql(4.536);
    });
    it("10 Celsius a Kelvin" , () => {
        expect(temp.convert(["celsius",10,"kelvin"])).to.eql(283.1);
    });
    it("10 minutos a segundos" , () => {
        expect(tiempo.convert(["m",10,"s"])).to.eql(600);
    });
    it("10 Metros por segundos a Millas por horas" , () => {
        expect(vel.convert(["m/s",10,"mph"])).to.eql(22.369);
    });
    it("10  ‎Galónes estadounidenses a Litros" , () => {
        expect(vol.convert(["gal",10,"l"])).to.eql(37.85);
    });
});