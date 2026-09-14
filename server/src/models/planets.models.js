const Planet = require('./planets.mongo')
const { parse } = require('csv-parse')
const fs = require('fs')
const path = require('path')
const habitatePlanet = [];

function ishabitate(planet) {
    return planet['koi_disposition'] === "CONFIRMED" &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6
}
function loadPlanet() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler-data.csv'))
            .pipe(parse({
                comment: "#",
                columns: true
            }))

            .on('data', async (data) => {
                if (ishabitate(data))
                        habitatePlanet.push(data);

                    //TODO:insert+update=upset
                // console.log(data.kepler_name);
                    // console.log(data)
                savePlanets(data);

                

            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {

                console.log(`${habitatePlanet.length}`);
                console.log("all done.")
                resolve();
            })
    })
}
async function getAllplanets() {
    return await Planet.find({})
}

async function savePlanets(planet) {

    if (!planet.kepler_name) {
        return;
    }

    await Planet.create({
        kepler_name: planet.kepler_name
    })
}

module.exports = {
    loadPlanet,


    getAllplanets,
}
