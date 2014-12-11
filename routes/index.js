var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/events', function(req, res) {
console.log('events!');
  req.socket.setTimeout(Infinity);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  res.write('\n');

  setInterval(function(){
  	console.log('yello');
    res.write('event: message\n');
    res.write('data: hello world\n');
    res.write('\n\n');
  }, 3000);

  req.on('close', function(){
    console.log('closed');
  });
});


module.exports = router;
