import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

admin.initializeApp(functions.config().firebase);
dotenv.config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

export const sendIntroEmail = functions.database
    .ref("/contact_us/{id}")
    .onCreate((snap, ctx) => {
      const data = snap.val();

      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });
      authData
          .sendMail({
            from: "info@cryptonoobs.com",
            to: `${data.email}`,
            subject: "Your submission info",
            text: `Hello, ${data.first_name}! We have received your inquiry. 
        A Crypto Noob will be in contact with you shortly. Happy hunting!`,
            html: `Hello, ${data.last_name}! We have received your inquiry. 
        A Crypto Noob will be in contact with you shortly. Happy hunting!`,
          })
          .then((response) => console.log("successfully sent email"))
          .catch((error) => console.log(error));
    });
