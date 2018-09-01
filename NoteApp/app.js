/*
* Author: Brian Liang
* Date: Aug 31, 2018
* Note taking app using Node.js
*/

//console.log('Starting app.');

const fs = require('fs'); //Allows us to access the fs library
const os = require('os'); //Allows access to the os library
const notes = require('./notes.js');

var user = os.userInfo(); //variable to store operating system username
//console.log(user);

//Writes to file
//fs.appendFileSync('greetings.txt', `Hello ${user.username}!`) //template string

//Writing file to file
