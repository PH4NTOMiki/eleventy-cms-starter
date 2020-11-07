const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST, {endpoint:'https://api.eu.sparkpost.com:443'});

exports.handler = function(event, context, callback) {
  //callback(JSON.stringify(event));
  client.transmissions
    .send({
      content: {
        from: (event.queryStringParameters.from || 'mihael') + '@email.mikitvba.com',
        subject: event.queryStringParameters.subject || 'Hello World',
        html:
          `<html><body><p>
                    ${event.queryStringParameters.text || ''}
          </p></body></html>`
      },
    recipients: [{ address: event.queryStringParameters.to || 'mihaelmiki123@gmail.com' }]
  }).then(data => {
    console.log('Mail sent!');
    console.log(data);
    callback( { statusCode: 200, body: data } );
  })
  .catch(err => {
    console.log('Whoops! Something went wrong: ');
    console.log(err);
    callback( { statusCode: 500, body: err } );
  });
}
