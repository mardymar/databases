var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('messages get')
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = 'application/json';
      res.writeHead(200, headers);
      Promise.promisify(models.messages.get);

      models.messages.get().then(function(messages){
        res.end(messages);
      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages post')

    var headers = defaultCorsHeaders;
    headers['Content-Type'] = 'application/json';
    res.writeHead(201, headers);

    var chunk = '';
    req.on('data', function (d) {
      chunk += d;
    });

      req.on('end', function () {
        data = JSON.parse(chunk);
        data.objectId = ++objectIdIndex;
        Promise.promisify(models.messages.post);

        models.messages.post(data).then(function(messages){
          res.end(messages);
        })
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get');
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = 'application/json';
      res.writeHead(200, headers);
      Promise.promisify(models.users.get);

      models.messages.get().then(function(users){
        res.end(users);
      })
    },
    post: function (req, res) {
        console.log('users post')
      var headers = defaultCorsHeaders;
      headers['Content-Type'] = 'application/json';
      res.writeHead(201, headers);

      var chunk = '';
      req.on('data', function (d) {
        chunk += d;
      });

      req.on('end', function () {
        data = JSON.parse(chunk);
        data.objectId = ++objectIdIndex;
        Promise.promisify(models.users.post);

        models.users.post(data).then(function(user){
          res.end(user);
        })
      });
     // a function which handles posting a message to the database
    }
  }
};

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.

};