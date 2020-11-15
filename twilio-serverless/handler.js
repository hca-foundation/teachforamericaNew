require('dotenv').config()
const Messenger = require('./messenger.js')
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken) // eslint-disable-line
//////////////
//////////////
const service = twilioClient.notify.services(
  process.env.TWILIO_NOTIFY_SERVICE_SID
)

module.exports.sendText = (event, context, callback) => {
  const messenger = new Messenger(twilioClient, event.body, service)
  console.log('updated 003')

  console.log('context', context)
  console.log('event', event)
  //{ to: '+16154897861', message: 'From the application' },
  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200
  }

  messenger.send(event)
}
