// Definimos el objeto padre con sus propiedades y métodos
var objetoPadre = {
    edad: null,
    nombre: null,
    apellidos: null,
    muestraDatos: function() {
        console.log(this.nombre + ' ' + this.apellidos + ' tiene una edad de ' + this.edad);
    }
};

// Creamos hijo1 a partir de objetoPadre
var hijo1 = Object.create(objetoPadre);
hijo1.edad = 21;
hijo1.nombre = 'Antonio';
hijo1.apellidos = 'Martínez García';

// Creamos hijo2 a partir de objetoPadre
var hijo2 = Object.create(objetoPadre);
hijo2.edad = 30;
hijo2.nombre = 'Pepe';
hijo2.apellidos = 'Martínez García';

// Mostramos los datos de hijo1 y hijo2
hijo1.muestraDatos();
hijo2.muestraDatos();

// Creamos una función nueva del Objeto Padre que será heredada por hijo1 e hijo2 a través del prototype
objetoPadre['verEdad'] = function() {
    console.log(this.edad);
};

// Mostramos la edad de hijo1 y hijo2 utilizando la nueva función heredada
hijo1.verEdad();
hijo2.verEdad();
