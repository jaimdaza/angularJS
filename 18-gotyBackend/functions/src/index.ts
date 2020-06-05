import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gameoftheyear-226d3.firebaseio.com",
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
    mensaje: "Hola mundo desde funciones de firebase!!!",
  });
});
export const getGoty = functions.https.onRequest((request, response) => {
    const nombre = ' Joel ';
    response.json({
        nombre
    })
  });
