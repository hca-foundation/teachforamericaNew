// needed to send a lot of messages at oncee.preventDefault()
//https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html

const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)
const body = 'Ice creams are coming!'
const numbers = [YOUR_NUMBER_HERE, OTHER_NUMBER]

const service = twilio.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID)
