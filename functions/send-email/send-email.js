const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST);

exports.handler = function(event, context, callback) {
  client.transmissions
    .send({
      content: {
        from: 'mihael@mikitvba.com',
        subject: 'Hello, World!',
        html:
          "<html><body><p>My cool email. Testing</p></body></html>"
      },
    recipients: [{ address: 'mihaelmiki123@gmail.com' }]
  });
}
