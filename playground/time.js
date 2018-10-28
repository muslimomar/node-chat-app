const moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment(1234);
console.log(date.format('hh:mm a'));
