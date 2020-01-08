/**
 * llamar a axios
 */
const axios = require('axios');


/**
 * funcion de obtener clima que reciba lat y lng
 */

const clima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a38264540e9d959194e155d7971ed66c&units=metric`);


    return resp.data.main.temp;
}

/**
 * Exportar funciones
 */

module.exports = {
    clima
}