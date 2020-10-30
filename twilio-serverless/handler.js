const Messenger = require('./messenger.js')

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken) // eslint-disable-line
//////////////
//////////////
module.exports.sendText = (event, context, callback) => {
  const messenger = new Messenger(twilioClient)

  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200
  }

  messenger
    .send(event)
    .then(message => {
      // text message sent! ✅
      console.log(`message ${message.body}`)
      console.log(`date_created: ${message.date_created}`)
      response.body = JSON.stringify({
        message: 'Text message successfully sent!',
        data: message
      })
      callback(null, response)
    })
    .catch(error => {
      response.statusCode = error.status
      response.body = JSON.stringify({
        message: error.message,
        error: error // eslint-disable-line
      })
      callback(null, response)
    })
}
// callback(
//   null,
//   logo({
//     name: 'Twilio Runtime',
//     version: '1.0.0'
//   }).render()
// )
// let twilio = new Twilio()
// twilio.messages
// .create({
//   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//   from: '+15017122661',
//   to: '+16154897891'
// })
//   .then(message => console.log(message.sid))
