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
    Meteor.call('send', number, 'How happy are you feeling? 1-10');

    document.getElementById('phone').value = '';
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
