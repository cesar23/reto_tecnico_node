const fetch = require('node-fetch');
const config= require('../Config/config')
const swapiPeopleAll = async (recurso) => {


    try {
        const resp = await fetch(`${config.api}${recurso}`);

        if (!resp.ok) {
            console.log(`HTTP error! status: ${resp.status}`);
            return "error";

        } else {
            const res = await resp.json();
            const result = res.results.map((p) => {

                return {

                    "nombre": p.name,
                    "alto": p.height,
                    "masa": p.mass,
                    "color_pelo": p.hair_color,
                    "color_piel": p.skin_color,
                    "color_ojo": p.eye_color,
                    "ano_nacimiento": p.birth_year,
                    "genero": p.gender,
                    "mundo_origen": p.homeworld,
                    "peliculas": p.films,
                    "especies": p.species,
                    "vehiculos": p.vehicles,
                    "inicio_enbarcacion": p.starships,
                    "creado": p.created,
                    "editado": p.edited,
                    "link": p.url
                };

            })

            return result;
        }
    } catch (e) {
        console.log(e);
        return "error";
    }




};
const swapiPeople = async (recurso) => {

    try {
        const resp = await fetch(`${config.api}${recurso}`);

        if (!resp.ok) {
            console.log(`HTTP error! status: ${resp.status}`);
            return "error";

        } else {
            const p = await resp.json();
            return {

                "nombre": p.name,
                "alto": p.height,
                "masa": p.mass,
                "color_pelo": p.hair_color,
                "color_piel": p.skin_color,
                "color_ojo": p.eye_color,
                "ano_nacimiento": p.birth_year,
                "genero": p.gender,
                "mundo_origen": p.homeworld,
                "peliculas": p.films,
                "especies": p.species,
                "vehiculos": p.vehicles,
                "inicio_enbarcacion": p.starships,
                "creado": p.created,
                "editado": p.edited,
                "link": p.url
            };
        }
    } catch (e) {
        console.log(e);
        return "error";
    }






};

module.exports = {
    swapiPeopleAll,
    swapiPeople
}
