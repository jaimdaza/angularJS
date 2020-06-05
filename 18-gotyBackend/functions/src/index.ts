import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://gameoftheyear-226d3.firebaseio.com",
});
const db = admin.firestore();
export const helloWorld = functions.https.onRequest((request, response) => {
    response.json({
        mensaje: "Hola Mundo desde Funciones de Firebase!!!",
    });
});

export const getGOTY = functions.https.onRequest(async (request, response) => {
    // const nombre = request.query.nombre || 'Sin Nombre';
    const gotyRef = db.collection("goty");
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map((doc) => doc.data());

    response.json(juegos);
});

// Express
const app = express();
app.use(cors({ origin: true }));

app.get("/goty", async (req, res) => {
    const gotyRef = db.collection("goty");
    const docsSnap = await gotyRef.get();
    const juegos = docsSnap.docs.map((doc) => doc.data());

    res.json(juegos);
});
