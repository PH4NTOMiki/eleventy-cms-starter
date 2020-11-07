const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST, {origin:'https://api.eu.sparkpost.com:443'});

exports.handler = function(event, context, callback) {
  client.transmissions
    .send({
      content: {
        from: 'mihael@email.mikitvba.com',
        subject: 'Hello, World!',
        html:
          "<html><body><p>My cool email. Testing</p></body></html>"
      },
    recipients: [{ address: 'mihaelmiki123@gmail.com' }]
  }).then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
}
