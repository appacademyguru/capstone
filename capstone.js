"use strict";
if (Meteor.isClient) {
    Session.setDefault('userName', "");
    
    Router.route('/', function () {
        this.render('home');
    });
    Router.route('/goCompare', function () {
        this.render('goCompare');
    });
}