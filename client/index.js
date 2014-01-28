// Define views and templates in the application here

Meteor.Router.add({
  '/': function() {
    return 'main';
  }
});

Template.main.events({
  'click #send' : function () {
    var number = document.getElementById('phone').value;
    // template data, if any, is available in 'this'
    var prompt = document.getElementById('msg').value;
    if (!prompt) {
      prompt = 'How happy are you feeling? 1-10';
    }
    Meteor.call('send', number, prompt);

    document.getElementById('phone').value = '';
    document.getElementById('msg').value = '';
  },

  'keypress #phone, change #phone': function() {
    Session.set('phone', document.getElementById('phone').value);
  }
});

Template.main.samples = function() {
  return Samples.find().fetch();
}

Template.main.prompts = function() {
  return Prompts.find().fetch();
}

Template.main.phone = function() {
  return Session.get('phone');
}

Template.main.helpers({
  blankPhone: function(phone) {
    return phone.replace(/\d\d\d\d$/, 'xxxx');
  }
});
