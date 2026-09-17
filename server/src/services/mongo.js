require("dotenv").config();

const mongoose = require("mongoose");

const mongooseUrl = process.env.MONGOOSE_URL;

console.log("Mongo URL exists:", !!mongooseUrl);

mongoose.connection.once("open", () => {
    console.log("your Mongoose is ready...");
});

mongoose.connection.on("error", () => {
    console.log("error while connecting with your db...");
});

async function mongoconnect() {
    await mongoose.connect(mongooseUrl);
}

module.exports = { mongoconnect };