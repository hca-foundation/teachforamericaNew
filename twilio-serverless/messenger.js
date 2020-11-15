'use strict'
//https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html

class Messenger {
  constructor (client, body, service) {
    this.client = client
    this.body = body
    this.service = service
  }

  send (event) {
    // use twilio SDK to send text message
    // const sms = {
    //   to: this.body.to,
    //   body: this.body.message,
    //   from: '+16156221017'
    // }
    const { phoneNumbers } = this.body
    console.log('phoneNumbers', phoneNumbers)
    //limit of 10,000 numbers to send.  split request to send more
    const boundNumbersToService = phoneNumbers.map(number =>
      JSON.stringify({ binding_type: 'sms', address: number })
    )
    ////
    console.log('boundNumbersToService', boundNumbersToService)
    // sends messages
    this.service.notifications
      .create({
        toBinding: boundNumbersToService,
        body: this.body.message
      })
      .then(notification => {
        console.log(notification)
      })
      .catch(err => {
        console.error(err)
      })
    // Promise.all(
    //   numbers.map(number => {
    //     return twilio.messages.create({
    //       to: number,
    //       from: process.env.TWILIO_MESSAGING_SERVICE_SID,
    //       body: body
    //     })
    //   })
    // )
    //   .then(messages => {
    //     console.log('Messages sent!: ', messages)
    //   })
    //   .catch(err => console.error(err))
    ////

    // sms.mediaUrl = 'https://live.staticflickr.com/5814/20058976494_0e6dc4caaf_q.jpg'

    // return this.client.messages.create(sms)
  }
}

module.exports = Messenger
