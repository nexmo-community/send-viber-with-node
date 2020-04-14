const axios = require('axios');

axios.post('https://messages-sandbox.nexmo.com/v0.1/messages',{
    "from": { "type": "viber_service_msg", "id": "" },
    "to": { "type": "viber_service_msg", "number": "" },
    "message": {
      "content": {
        "type": "text",
        "text": "This is a Viber Service Message sent from the Messages API"
      }
    }
  },{
    headers: {
      'Content-Type': 'application/json'
    },
    auth: {
      username: '',
      password: ''
    }
  })
  .then(function (response) {
    console.log('Status: ' + response.status);
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });