// Handle incoming sample
Meteor.Router.add('/post_message', function() {
  console.log('Server received post:', this.request.query);
  if (this.request.query) {
    this.request.query.timestamp = new Date();
    Samples.insert(this.request.query);
  }
  return [200, 'OK'];
});

Meteor.Router.add('/send_notification', function() {
  console.log('Server sending notification:', this.request.query);
  if (this.request.query) {
    Meteor.call('send', this.request.query.phone);
  }
  return [200, 'OK'];
});

Meteor.Router.add('/data', function() {
  console.log('Returning samples for query:', this.request.query);
  var result = {};
  if (this.request.query && this.request.query.phone) {
    var canonical = this.request.query.phone;
    var orig = this.request.query.phone;
    if (canonical[0] != "+") {
      canonical = "+1" + canonical.replace(/-/g, "");
    }
    result.samples = Samples.find({$or: [{From: canonical}, {From: orig}]}).fetch();
    result.prompts = Prompts.find({$or: [{to: canonical},
      {to: orig}]}).fetch();
  }
  return [200, JSON.stringify(result)];
});

