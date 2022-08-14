
require('dotenv').config();

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {

      user: process.env.EMAIL_USERNAME,

      pass: process.env.EMAIL_PASSWORD

    }

 });

const mailOptions = {

    from: 'divyanb12345@gmail.com', // Sender address

    to: 'divyabharathan97@gmail.com,ashin.jnv@gmail.com', // List of recipients

    subject: 'Send by nodemailer', // Subject line

    text: 'Hi Ashin Sir! This is Divya. Completed Btech ', // Plain text body

};



transport.sendMail(mailOptions, function(err, info) {

   if (err) {

     console.log(err)

   } else {

     console.log(info);

   }

});