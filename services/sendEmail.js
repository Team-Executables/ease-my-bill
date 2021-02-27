import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

//value(bill, payment success, greeting)
const sendEmail = async ({ from_name, name, email, subject, value }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: `${subject}`
            }
          ],
          from: {
            email: 'anuragsanjay502@gmail.com',
            name: `${from_name}`
          },
          content: [
            {
              type: 'text/html',
              value: `To ${name} <br> ${value}`
            }
          ]
        })
    });
}

export { sendEmail };