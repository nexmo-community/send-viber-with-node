require('dotenv').config();
const axios = require('axios');

var user = process.env.USERNAME;
var password = process.env.PASSWORD;
var from_id = process.env.FROM_ID;
var to_num = process.env.TO_NUM;

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
var today = weekdays[new Date().getDay()];

axios.post('https://messages-sandbox.nexmo.com/v0.1/messages',{
    "from": { "type": "viber_service_msg", "id": from_id },
    "to": { "type": "viber_service_msg", "number": to_num },
    "message": {
      "content": {
        "type": "text",
        "text": "Hello from Vonage! Happy " + today
      }
    }
  },{
    auth: {
      username: user,
      password: password
    }
  })
  .then(function (response) {
    console.log('Status: ' + response.status);
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });