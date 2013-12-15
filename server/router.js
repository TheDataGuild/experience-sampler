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
