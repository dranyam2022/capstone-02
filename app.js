const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


app.listen(port, () => {
    console.log(`Connected to localhost:${port}!`)
})


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGODB_URL, () => {
        console.log(`Connected to MongoDB Successfully!`)
    });
}