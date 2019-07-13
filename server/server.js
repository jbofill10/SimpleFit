import express from "express";
import bodyParser from "body-parser";
import db from './db'
import Nutritionix from "./api/nutritionix-api/nutritionix";
import "dotenv/config"


// Connect to Mongo DB
db.init();


console.log("[Server]: Starting up server");
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=> res.send("Hello"));


app.listen(port, () => {
    console.log("Listening on port", port);
});

Nutritionix.enableNutritionix(app);