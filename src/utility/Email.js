import React from "react";
import emailjs from "@emailjs/browser";
const emailData = (data) => {
  const templateParams = {
    from_name: data.name,
    email: data.email,
    message: data.message,
  };
  console.log(templateParams);
  emailjs
    .sendForm(
      `${process.env.REACT_APP_SERVICE_ID},${process.env.REACT_APP_TEMPLATE_ID}, templateParams, ${process.env.REACT_APP_PUBLIC_KEY}  `
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
export default emailData;
