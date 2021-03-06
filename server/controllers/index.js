var models = require('../models');
var Promise = require('bluebird');
var db = require('../db/index.js');

var objectIdIndex = 1;

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('messages get')
      // var headers = defaultCorsHeaders;
      // headers['Content-Type'] = 'application/json';
      // res.writeHead(200, headers);


      // models.messages.get(function(messages){

      //   var stringify = JSON.stringify(messages);
      //   console.log(messages, stringify);

      //   var obj = {};
      //   obj.results = [];

      //   messages.forEach(function(message){
      //     obj.results.push(message);
      //   })

      //   console.log(obj);

      //   res.end(JSON.stringify(obj));
      db.Message.findAll({include: [db.User]})
        .then(function(messages) {
          res.json(messages);
        })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages post')

  //   var headers = defaultCorsHeaders;
  //   headers['Content-Type'] = 'application/json';
  //   res.writeHead(201, headers);

  //   var chunk = '';
  //   req.on('data', function (d) {
  //     chunk += d;
  //   });

  //     req.on('end', function () {
  //       data = JSON.parse(chunk);
  //       data.objectId = ++objectIdIndex;

  //       models.messages.post(data, function(messages){
  //         res.end(JSON.stringify(messages));
  //       });
  //     });
  //   } // a function which handles posting a message to the database
    db.User.findOrCreate({where: {username: req.body.username}})
    .spread(function(user, created) {
      db.Message.create({
        username : user.get('id'),
        text: req.body.message,
        roomname: req.body.roomnane
      }).then(function(message){
        res.sendStatus(201);
      })
    })
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users get');
      // var headers = defaultCorsHeaders;
      // headers['Content-Type'] = 'application/json';
      // res.writeHead(200, headers);

      // models.messages.get(function(users){
      //   res.end(JSON.stringify(users));
      // });
      db.User.findAll()
        .then(function(users) {
          res.json(users);
        })
    },
    post: function (req, res) {
        console.log('users post')
      // var headers = defaultCorsHeaders;
      // headers['Content-Type'] = 'application/json';
      // res.writeHead(201, headers);

      // var chunk = '';
      // req.on('data', function (d) {
      //   chunk += d;
      // });

      // req.on('end', function () {
      //   data = JSON.parse(chunk);
      //   data.objectId = ++objectIdIndex;

      //   models.users.post(data, function(user){
      //     res.end(JSON.stringify(user));
      //   })
        db.User.findOrCreate({where: {whername: req.body.username}})
          .spread(function(user, created) {
            res.sendStaus(created ? 201 : 200);
          })
     // a function which handles posting a message to the database
      }
    }
  }
}

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.

};