var amqp = require('amqplib/callback_api');

var min=1,max=100;

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'robot';
    var args = process.argv.slice(2);
    var key = (args.length > 0) ? args[0] : 'kameri.data.robot.anything';
    var msg = {id:'Random Number',value:(Math.floor(Math.random() * (max - min)) + min)};

    channel.assertExchange(exchange, 'topic', {
      durable: false
    });
    channel.publish(exchange, key, Buffer.from(JSON.stringify(msg)));
    console.log(" [x] Sent %s", JSON.stringify(msg));
    console.log(" [x] Key %s", key);
  });

  setTimeout(function() { 
    connection.close(); 
    process.exit(0) 
  }, 500);
});