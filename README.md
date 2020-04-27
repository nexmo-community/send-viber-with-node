# Send a Viber Message with Node

This file sends a test Viber message using Node and the Vonage Developer Messaging sandbox. To use it, first go to your [Vonage Developer](https://dashboard.nexmo.com/) dashboard and configure your [Viber sandbox](https://dashboard.nexmo.com/messages/sandbox).

Clone the repository to a new directory on your machine and:

1. Run `npm install` to add [axois](https://github.com/axios/axios) for making requests and support for a `.env` file
2. Create a new `.env` file and populate it with your credentials:
   ```text
   USERNAME="12ab3456"
   PASSWORD="123AbcdefghIJklM"
   FROM_ID="12345"
   TO_NUM="441234567890"
   ```
   Your username and password are your Vonage API key and secret. You can copy the from ID from the cURL command at the bottom of the sandbox page, and the to number is the device number you've whitelisted.
3. Run `node app.js` to send a test message

Read about how this code works on the [Vonage Developer blog](https://www.nexmo.com/blog/2020/04/22/send-a-viber-message-with-node-dr) ☞
