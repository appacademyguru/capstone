"use strict";

Template.registerHelper("getInfo", function () {
    var cityVar = Session.get("City");
    var cities = Cities.find({}, {
        sort: {
            city: 1
        }
    }).fetch();
    var cityMatch;
    console.log(cities);

    for (var i = 0; i < cities.length; i++) {
        console.log("LOL!");
        if (cities[i].city == cityVar) {
            console.log("MATCH!");
            cityMatch = cities[i].city;

            break;
        }
    }
    Session.set('Cities', cities[i]);
});

Template.registerHelper("cityName", function () {
    var userCity = Session.get("Cities");
    return userCity.city;
});

Template.registerHelper("gas", function () {
    var userCity = Session.get("Cities");
    return userCity.gas;
});
Template.registerHelper("bus", function () {
    var userCity = Session.get("Cities");
    return userCity.bus;
});
Template.registerHelper("onebedapt", function () {
    var userCity = Session.get("Cities");
    return userCity.onebedapt;
});
Template.registerHelper("salary", function () {
    var userCity = Session.get("Cities");
    return userCity.salary;
});
Template.registerHelper("electricity", function () {
    var userCity = Session.get("Cities");
    return userCity.electricity;
});
Template.registerHelper("water", function () {
    var userCity = Session.get("Cities");
    return userCity.water;
});