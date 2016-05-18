 "use strict";
Template.home.events({
    
    'submit form': function (event) {
        event.preventDefault();
        var city = event.target.city.value;
        Session.set('City', city.toLowerCase());
        Router.go('/cityStats');
    }
});
Template.header.events({
    'click #goCompare': function (event) {
        Router.go('/goCompare');
    },
    'click #logo': function (event) {
        Router.go('/');
    },
    'click #title': function (event) {
        Router.go('/');
    }
});

Template.goCompare.events({
    'submit form': function (event) {
        event.preventDefault();
        var city1 = event.target.city1.value;
        var city2 = event.target.city2.value;
        Session.set('City1', city1.toLowerCase());
        Session.set('City2', city2.toLowerCase());
        Router.go('/cityStats2');
    }
});