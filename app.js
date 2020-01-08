/**
 * Llamar funcion de lugar y clima
 */

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/**
 * Lamar a YARGS
 */

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Inserta la ciudad donde deseas obtener el clima',
        demand: true
    }
}).argv;

/**
 * llamar a funcion
 */

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log); //de esta forma imprime la única respuesta

// clima.clima(19.430000, -99.139999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {


    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.clima(coords.lat, coords.lng);
        return `${coords.nombreDireccion} está a ${temp} grados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);