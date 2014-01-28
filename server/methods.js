Meteor.methods({
  send: function(number, prompt) {
    // Twilio Credentials 
    var accountSid = 'YOUR_ACCOUNT_SID_HERE'; 
    var authToken = 'YOUR_AUTH_TOKEN_HERE'; 
     
     //require the Twilio module and create a REST client 
     var client = Meteor.require('twilio')(accountSid, authToken); 

     if (!prompt) {
      prompt = 'How happy are you feeling? 1-10';
     }
     console.log('Prompt received:', prompt);

     Prompts.insert({
       timestamp: new Date(),
       to: number,
       prompt: prompt
     });
      
     client.messages.create({  
      // Tessa's Twilio phone number
      to: number,
      from: "YOUR_PHONE_NUMBER_HERE",
      body: prompt
     }, function(err, message) { 
      if (err) {
        console.log('Error sending via twilio:', err);
      }
     });
  }
});
