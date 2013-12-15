Experience sampler
==================

Lightweight web application that sends you SMS prompts to sample your happiness,
and records your response.

How to use it
=============

First you need to authenticate your phone number with Twilio in order to be
able to receive text messages from our automated system.  Contact @tlau to set
this up if you're interested.

Then you can visit http://experience-sampler.meteor.com to send yourself a
sample prompt.  There is a URL on that page you can copy and use with cron (or
similar) to automatically trigger sending of a prompt.

The system will send you a text message asking you how happy you are. Reply
to it with a number from 1-10 and this value will get recorded in our
system along with the timestamp.

The web page also shows the log of past prompts and responses. There is no
REST API available yet to retrieve this data, but that will be easy to add
in the future.

How it works
============

The system is using Twilio in the back end to send and receive text
messages. The account is owned by @tlau and is currently a trial account.
We may need to pay for it eventually if the trial expires.

The website is built using [Meteor.js](http://meteor.com) and
deployed/hosted on Meteor's servers. The data is stored in a MongoDB
instance running on the Meteor deployment. Meteor provides this hosting
service on an as-is, unsupported basis. We should probably back up the
database and/or move the server to a production hosting service if it
proves useful.
