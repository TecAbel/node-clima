/**
 * Llamar a axios
 */

const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    /**
     * hacer de la dirección un url seguro
     */

    const dirUrl = encodeURI(direccion); //New York to => New%20York

    //console.log(dirUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ dirUrl }`,
        headers: { 'x-rapidapi-key': '50fbc27648msh9226e62ff8e5172p15a4a9jsnd2f9498b527f' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.Results[0];

    const nombreDireccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        nombreDireccion,
        lat,
        lng
    }
}

/**
 * Eportar funcion
 */

module.exports = {
    getLugarLatLng
}