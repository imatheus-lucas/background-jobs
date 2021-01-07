const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.PORT,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });


  export default transport;