var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect(function(err) {
        if (err) throw err;
        db.query("SELECT * FROM messages", function (err, result, fields) {
          if (err) throw err;
          return result;
        });
      });
      //var theMessages = JSON.stringify(messages);

    }, // a function which produces all the messages
    post: function (message) {
      db.connect(function(err) {
        if (err) throw err;
        db.query(`INSERT INTO messages (words, room, user) VALUES (${message.text}, ${message.roomname}, ${message.username})`, function (err, result, fields) {
          if (err) throw err;
          return message;
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.connect(function(err) {
        if (err) throw err;
        db.query("SELECT * FROM users", function (err, result, fields) {
          if (err) throw err;
          return result;
        });
      });
    },
    post: function (user) {
      db.connect(function(err) {
        if (err) throw err;
        var username = JSON.parse(user);
        db.query(`INSERT INTO users (name) VALUES (${username})`, function (err, result, fields) {
          if (err) throw err;
          return user;
        });
      });
    }
  }
};



