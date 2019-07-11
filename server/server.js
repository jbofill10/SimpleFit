import express from "express";
import bodyParser from "body-parser";
import "dotenv/config"

console.log("[Server]: Starting up server");
const app = express();
const port = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
/**
 * TODO: Add MONGO DB
 */

app.get("/", (req,res)=> res.send("Hello"));


app.listen(port, () => {
    console.log("Listening on port", port);
})