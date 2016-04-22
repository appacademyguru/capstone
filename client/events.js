 "use strict";
Template.home.events({
    'click #goCompare': function (event) {
        Router.go('/goCompare');
    },
    'submit form': function (event) {
        event.preventDefault();
        var city = event.target.city.value;
        Session.set('City', city);
        Router.go('/cityStats');
    }
});