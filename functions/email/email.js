const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const msg = {
      to: "nolestock@gmail.com", // Change to your recipient
      from: "nolestock@gmail.com", // Change to your verified sender
      subject: `${body.name} ${body.subject}`,
      text: "Message:",
      html: `<h1>Message from ${body.name} with email ${body.from_email} about ${body.subject}</h1>
             <p>${body.message}</p>
            `
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg }),
    };
      
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
