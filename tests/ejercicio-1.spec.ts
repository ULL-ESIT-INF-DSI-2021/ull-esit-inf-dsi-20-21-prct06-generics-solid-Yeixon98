import 'mocha';
import {expect} from 'chai';
import {Figther} from '../src/ejercicio-1/fighter';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {CL} from '../src/ejercicio-1/codigolyoko';
import {Marvel} from '../src/ejercicio-1/marvel';
import {Combat} from '../src/ejercicio-1/combate';
import {Pokedex} from '../src/ejercicio-1/pokedex';


describe('El combate definitivo', () => {
    it("Objeto pokemon" , () => {
        expect(new Pokemon("Torchi",2,4,7,"fuego") instanceof Pokemon).to.eql(true);
    });
    it("Objeto Codigo Lyoko" , () => {
        expect(new CL("Tokonome",2,3,5,"Codigo Lyoko") instanceof CL).to.eql(true);
    });
    it("Objeto Marvel" , () => {
        expect(new Marvel("Dr.Strange",2,1,6,"Marvel") instanceof Marvel).to.eql(true);
    });
    it("Objeto Pokedex" , () => {
        expect(new Pokedex([new Pokemon("Torchi",2,4,7,"fuego"),new Marvel("Dr.Strange",2,1,6,"Marvel")]) instanceof Pokedex).to.eql(true);
    });
    it("Objeto Combat" , () => {
        expect(new Combat(new Pokemon("Torchi",2,4,7,"fuego"),new Marvel("Dr.Strange",2,1,6,"Marvel")) instanceof Combat).to.eql(true);
    });
});