// Define views and templates in the application here

Template.main.greeting = function () {
  return "Welcome to meteor-seed.";
};

Template.main.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});
