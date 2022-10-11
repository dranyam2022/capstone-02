const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require("dotenv");
const port = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(process.env.PORT || port, () => {
    console.log(`Connected to localhost:${process.env.PORT || port}!`)
})


async function main(){
   await mongoose.connect(
    `mongodb+srv://dranyam123:${process.env.MONGODB_PASSWORD}@cluster0.r17kiq2.mongodb.net/caps2_ecom_api?retryWrites=true&w=majority`
    , 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}

main().catch(error=> console.log(error))

let db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"))
