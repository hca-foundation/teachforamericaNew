require('dotenv').config()
const Messenger = require('./messenger.js')
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken) // eslint-disable-line
//////////////
//////////////

module.exports.sendText = (event, context, callback) => {
  const messenger = new Messenger(twilioClient, event.body)
  console.log('updated 001')

  console.log('context', context)
  console.log('event', event)
  //{ to: '+16154897861', message: 'From the application' },
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
