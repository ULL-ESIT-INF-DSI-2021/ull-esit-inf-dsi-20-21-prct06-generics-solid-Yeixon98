# Practica 6 - DSI

## Yeixon Reinaldo Morales Gonzalez
---
<br>

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98?branch=master)

### Indice
1. [Introducion](Intro)
2. [Objetivos](Obj)
3. [Tareas Previas](TP)
4. [Ejercicios](Ejer)
5. [Documentacion](Docs)
6. [Cubrimiento](Cover)

***

## 1- Introducción <a name="Intro"></a>

Práctica en donde se desarrollarán distintos problemas propuestos. La intencionalidad detrás de esta practica es el desarrollo de las capacidades de los alumnos para resolver problemas y manejarse en un entorno TypeScript, en particular haciendo uso de las clases abstractas, typos de datos e interfaces.

***
## 2- Objetivos <a name="Obj"></a>

El objetivo de esta práctica es aprender a manejar clases abstractas e interfaces genéricas, además de realizar ña documentación del código con la herramienta Typedoc y testear las funciones con el uso de las herramientas mocha y chai. Por último configuraremos las herramientas Instanbul y Coveralls para generar informes sobre el cubrimiento del código fuente.

***
## 3- Tareas Previas <a name="TP"></a>

Antes de la realización de la práctica ha sido necesario consultar la documentación acerca de las herramientas que generan informes de cubrimiento de código y los principios SOLID.

***
## 4- Ejercicios <a name="Ejer"></a>

### Ejercicio 1 - El combate definitivo

En este ejercicio nos pedian desarrollar diferentes clases para poder lograr un combate entre distintos personajes de diferentes univesos, para ello creamos una clase abstracta
que representaria a todos los combatientes(Fighter), y despeus otras subclases(Pokemon, Marvel, CodigoLyoko) para especificar ams cada metodo como el de eficiencia, que devuelve que tan duro pega cada personaje respecto a su oponente, y el metodo de imprimir el ganador, mostrando de que universo y como se llama.
Por ultimo desarrollamos una clase Pokedex que implementaria un vector de combatientes, en el cual se almacenaran todos los combatientes existentes/usados para el combate.

[Codigo](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/tree/master/src/ejercicio-1)

Para la realizaciond e los test, primero tenemos que exportar las clases que queremos usar, para esto incluimos en el fichero ```import {CLASS} from '../src/ejercicio-1/*';```
donde el * se sustituye por los diferentes ficheros creando multiples lineas y CLASS por als clases correspondiente al fichero. En el test se comprobo la creacion correcta de cada Objecto de als diferentes clases y se llevo a cabo un combate.

[Test](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/blob/master/tests/ejercicio-1.spec.ts)

### Ejercicio 2 - Conversor de unidades

Para este ejercico nos pedian que implementramos una interfaz generiaca y varias clases, para poder convertir de una unidad a otra.
Para ello se creo una interfaz generica con un metodo 'convert', y diversas clases que dependian de esta interfaz y cada una de ellas,
tenia definido su propio metodo 'convert' dependiendo de la clase ,ejemplo masa, este metodo recivia un vector con un string el cual sera la unidad base, un numero que representaba la cantidad de dicha unidad y otro string que es a la unidad a la que se desea convertir; y a traves de unios if, comprobamos cual es el la unidad inicial y cual la final y con unas simples multiplicaciones o divisiones se convertian en la unidad destino.

[Codigo](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/tree/master/src/ejercicio-2)

Para realizar el test hay que seguir los primeros pasos del ejercicio 1 pero cambiando la ruta a ejercicio-2.
En este test comrobamos que se puede convertir valores de unidades de medidas similaes a otra de la misma ejemple de litro(l) a galones estadounidences(gal) y asi con las demas unidades de medidas. 

[Test](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/blob/master/tests/ejercicio-2.spec.ts)

### Ejercicio 3 - DSIflix

En este último ejercicio se ha creado como solicita el enunciado una interfaz genérica `Streamable` que contiene algunos métodos con los
que debe contar una colección de emisiones, como por ejemplo agregar un elemento a la colección, obtener el número de elementos de la 
colección o los propios elementos.
A continuación se ha creado otra interfaz que contiene un método de búsqueda, que extiende a la anterior. Este método permite especificar 
el parámetro por el que se desea buscar y el valor del mismo. Por ejemplo: searchBy(‘titulo’, ‘Darling’).
Lo siguiente que se ha hecho es crear una clase abstracta que permite definir una colección de objetos Streamable, donde se definen algunos de los métodos incluidos en las interfaces.
Por último se han creado tres clases, que representan colecciones de series, películas y documentales. En ellas se definen los métodos que seguían siendo abstractos en la clase anterior. Todas ellas se definen de manera similar.

[Codigo](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/tree/master/src/ejercicio-3)

En el test se han creado objetos de cada clase, series, películas y documentales, para asi añadir esos a una coleccion, poder realizar las pruebas, que estas valoran la busquedad por cada uno de los atributos, pasandole lo que desa buscar, ejemplo Object.searchBy("año",2018). devolviendo asi un vector de las series/películas/documentales dependiendo del objeto invocante, que coincidan.

[Test](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-Yeixon98/blob/master/tests/ejercicio-3.spec.ts)

***
## 5- Documentacion <a name="Docs"></a>

Para documentar el código de cada función, se deberá hacer uso de las etiquetas disponibles. Todo el texto se deberá encapsularse entre los símbolos /** */. Una gran ventaja del IDE VSCode es que con escribir los primeros caracteres para añadir comentarios, detecta automáticamente que se pretende incluir documentación, y al presionar enter, crea la estructura con las etiquetas correspondientes, donde sólo deberemos completar los espacios donde se corresponde con la descripción de los atributos y de la función.

Para poder generar la documentación, creamos un fichero typedoc.json en el que se escribe la ruta de todos los ficheros de los que se quiera realizar la documentación y se ha añadido al apartado de scripts del fichero package.json esta línea:

```
"doc": "typedoc"
```

Ahora se puede generar la documentación a partir del comando `npm run doc`. Se generará un documento html que contiene una página con la documentación de las funciones que hemos escrito.

***
## 6- Cubrimiento <a name="Cover"></a>

Para poder generar informes de cubrimiento ha sido necesario instalar las dependencias `nyc` y `coveralls`.

```
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
```

Para generar los informes es necesario que el repositorio sea público. Además, desde la web de [coveralls](https://coveralls.io/) seleccionando el repositorio al que queremos hacer seguimiento, deberemos obtener el token y colocarlo en un fichero _.coveralls.yml_. De esta manera, al ejecutar

```
npm run coverage
```

Podremos ver qué porcentaje del código está cubierto por pruebas y qué líneas de cada fichero no lo están.

![Estadisticas de Cubrimiento](./assets/coveralls.PNG)

Estas estadisticas se encuentran bajas puesto que en el codigo hay muchos caminos que no se toman, con caminos me refiero por ejemplo a un 'if'.
