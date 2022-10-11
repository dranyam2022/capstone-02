const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(port, () => {
    console.log(`Connected to localhost:${port}!`)
})


async function main(){
   await mongoose.connect(
        process.env.MONGODB_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

main().catch(error=> console.log(error))

let db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"))
