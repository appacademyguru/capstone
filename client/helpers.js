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
//            Session.set('Cities', cities[i]);
            return cityMatch;
        }
    }
    
    return "why";
});