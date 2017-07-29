var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {

      db.con.query("SELECT * FROM messages;", function (err, result, fields) {
        if (err) throw err;
        console.log('get', result)
        callback(result);
      });
    }, // a function which produces all the messages

    post: function (message, callback) {
      //console.log(message, "in model post");
      var sql = "INSERT INTO messages (text, roomname, username) VALUES (?, ?, ?);"
      db.con.query(sql, [message.text, message.roomname, message.username], function (err, result, fields) {
        if (err) throw err;
        callback(message);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {

      db.con.query("SELECT * FROM users;", function (err, result, fields) {
        if (err) throw err;
        callback(result);
      });
    },

    post: function (user, callback) {

      var username = JSON.parse(user);
      db.con.query(`INSERT INTO users (name) VALUES (${username});`, function (err, result, fields) {
        if (err) throw err;
        callback(user);
      });
    }
  }
};



