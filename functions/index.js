const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51ITXt7LFhr6SU5Ljzg4Sqt0I2VVme9UMvkvFdXmFcd0EoCaR4E1uBbjOVo8Wb6WQmql0R2iz83XFqGcDD63kHOgq00e5MtbUdO")


//-App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API routes
app.get("/", (request, response) => response.status(200).send("helloworld"))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment Request Recieved BOOM!!!", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen
exports.api= functions.https.onRequest(app)

