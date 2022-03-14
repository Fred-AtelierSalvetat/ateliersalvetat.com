import React, { useEffect } from "react";

import Amplify, { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Message } from "./models";

//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
DataStore.configure(awsconfig);
Amplify.configure(awsconfig);

Amplify.Logger.LOG_LEVEL = "DEBUG";

const Contact = () => {
  useEffect(() => {
    async function createMsg() {
      const r = DataStore.save(
        new Message({
          senderAddress: "moafred@gmail.com",
          subject: "Premier test avec param TITRE",
          message: "Body/nblabla",
        })
      );
      console.log("r", r);
      r.then((msg) => {
        console.log("msg", msg);
      });
      await DataStore.start().then((message) => {
        console.log("message =", message);
      });
      console.log("r", r);
    }
    Auth.signIn("ateliersalvetat-siteweb", "c#uP?vdhiG_7#vKw")
      .then((user) => {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          console.log("NEW_PASSWORD_REQUIRED");
          Auth.completeNewPassword(
            user, // the Cognito User Object
            "c#uP?vdhiG_7#vKw" // the new password
          )
            .then((user) => {
              // at this time the user is logged in if no MFA required
              console.log(user);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          createMsg();
          // other situations
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <p>Page contact </p>;
};

export default Contact;
