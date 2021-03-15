'use strict'

class Messenger {
  constructor (client, body, service) {
    this.client = client
    this.body = body
    this.service = service
  }

  send () {
    const { phoneNumbers } = this.body
    //limit of 10,000 numbers to send.  split request to send more
    const boundNumbersToService = phoneNumbers.map(number =>
      JSON.stringify({ binding_type: 'sms', address: number })
    )
    ////
    // sends messages
    this.service.notifications
      .create({
        toBinding: boundNumbersToService,
        body: this.body.message
      })
      .then(notification => {
        return notification.body
      })
      .catch(err => {
        console.error(err)
      })

    // sms.mediaUrl = 'https://live.staticflickr.com/5814/20058976494_0e6dc4caaf_q.jpg'
  }
}

module.exports = Messenger
