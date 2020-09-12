const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

//routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payment/create", async (req, res) => {
    try{
        const total = req.query.total;
        console.log("payment request received. amount:", total);
      
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total,
          currency: "usd",
        });

      
        res.status(201).send({
          clientSecret: paymentIntent.client_secret,
        });
    } catch({message}) {
        console.log(message)
    }
  
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f38c5/us-central1/api
