const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
const { loadPlanet } = require('./models/planets.models')
const { error } = require('console')

const PORT = process.env.PORT || 8000
const Mongose_URL='mongodb+srv://nasa-api:hLPPJbs1U1epcbM3@nasacluster.fwv0aju.mongodb.net/?appName=NASACluster'


const server = http.createServer(app)
mongoose.connection.once('open',()=>{
    console.log('your Mongoose is ready...')
})
mongoose.connection.on('error',()=>{
    console.log("error while connecting with your db...")
})

async function startserver() {
 await mongoose.connect(Mongose_URL)
    await loadPlanet();
    server.listen(PORT, () => {
        console.log(`listening at the port ${PORT}`)
    })
}
startserver();