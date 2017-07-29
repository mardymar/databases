var mysql = require('mysql');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'plantlife')
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// exports.sequelize = new Sequelize('chat', 'host', 'plantlife', {
//     host: 'http://127.0.0.1',
//     port: 3000,
//     dialect: 'mysql'
// });

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);

// exports.sequelize.authenticate()
//  .then(function() {
//     console.log('connected');
//  })
//  .catch(function (err) {
//   console.log('error');
//  })
// .done();
User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;

// var test = sql.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();