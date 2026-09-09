const http = require('http')
const app = require('./app')
const { loadPlanet } = require('./models/planets.models')

const PORT = process.env.PORT || 8000

const server = http.createServer(app)

async function startserver() {

    await loadPlanet();
    server.listen(PORT, () => {
        console.log(`listening at the port ${PORT}`)
    })
}
startserver();