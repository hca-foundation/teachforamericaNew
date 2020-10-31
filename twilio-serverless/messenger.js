'use strict'

class Messenger {
  constructor (client, body) {
    this.client = client
    this.body = body
  }

  send (event) {
    // use twilio SDK to send text message
    const sms = {
      to: this.body.to,
      body: this.body.message,
      from: '+16156221017'
    }

    // add image to sms if supplied

    sms.mediaUrl =
      'https://live.staticflickr.com/5814/20058976494_0e6dc4caaf_q.jpg'

    return this.client.messages.create(sms)
  }
}

module.exports = Messenger
