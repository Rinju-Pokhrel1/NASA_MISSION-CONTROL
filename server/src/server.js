const http = require("http");
const app = require("./app");

const { mongoconnect } = require("./services/mongo");
const { loadPlanet } = require("./models/planets.models");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startserver() {
    await mongoconnect();
    await loadPlanet();

    server.listen(PORT, () => {
        console.log(`listening at port ${PORT}`);
    });
}

startserver();