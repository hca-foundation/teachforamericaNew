'use strict'

class Messenger {
  constructor (client) {
    this.client = client
  }

  send (event) {
    // use twilio SDK to send text message
    const sms = {
      to: '+1',
      body: 'Teach for America Rocks!!!  Sent from Twilio',
      from: '+18046210826'
    }

    // add image to sms if supplied

    sms.mediaUrl =
      'https://live.staticflickr.com/5814/20058976494_0e6dc4caaf_q.jpg'

    return this.client.messages.create(sms)
  }
}

module.exports = Messenger
