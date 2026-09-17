const mongoose = require("mongoose");

const Mongose_URL = 'mongodb+srv://nasa-api:hLPPJbs1U1epcbM3@nasacluster.fwv0aju.mongodb.net/?appName=NASACluster'

mongoose.connection.once("open", () => {
    console.log("your Mongoose is ready...");
});

mongoose.connection.on("error", () => {
    console.log("error while connecting with your db...");
});

async function mongoconnect() {
    await mongoose.connect(Mongose_URL);
}

module.exports = { mongoconnect };