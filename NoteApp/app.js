/*
* Author: Brian Liang
* Date: Aug 31, 2018
* Note taking app using Node.js
*/

console.log('Starting app.');

const fs = require('fs'); //Allows us to access the fs library
//const os = require('os'); //Allows access to the os library


// var user = os.userInfo(); //variable to store operating system username
//console.log(user);

//Writes to file
const notes = require('./notes.js');
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!, you are ${notes.age}.\n`) //template string

//Writing file to file
// var res = notes.addNote();
// console.log(res);

//Add fucntion in notes.js
// console.log('Results: ' + notes.add(9,-2));

//Using third party modules lodash
const _ = require('lodash');
// console.log(_.isString(true));
// console.log(_.isString('Brian'));
//
// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);

var command = process.argv[2];
console.log('Command: ', command);
if (command === 'add'){
  console.log('Adding new note');
} else if (command === 'list'){
  console.log('Listing all notes');
} else{
  console.log('Command not recoganized');
}
