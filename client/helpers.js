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
    if(cityMatch == null){
        Router.go("/error");
    }
    else{
        Session.set('Cities', cities[i]);
    }
});

Template.registerHelper("cityName", function () {
    var userCity = Session.get("Cities");
    return userCity.city.toUpperCase();
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

//////////////////////////////////////////////////////////////////

Template.registerHelper("getCities", function () {
    var cityVar1 = Session.get("City1");
    var cities1 = Cities.find({}, {
        sort: {
            city: 1
        }
    }).fetch();
    var cityMatch1;
    console.log("cities1 " + cities1);

    for (var i = 0; i < cities1.length; i++) {
        console.log("LOL!");
        if (cities1[i].city == cityVar1) {
            console.log("MATCH!");
            cityMatch1 = cities1[i].city;

            break;
        }
    }
    Session.set('Cities1', cities1[i]);
    ///////////////////////////////////////////////////////////////
    
    var cityVar2 = Session.get("City2");
    var cities2 = Cities.find({}, {
        sort: {
            city: 1
        }
    }).fetch();
    var cityMatch2;
    console.log(cities2);

    for (var i = 0; i < cities1.length; i++) {
        console.log("LOL!");
        if (cities2[i].city == cityVar2) {
            console.log("MATCH!");
            cityMatch2 = cities2[i].city;

            break;
        }
    }
    Session.set('Cities2', cities2[i]);
});

Template.registerHelper("compareGas", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log("userCity1" + userCity1);
    console.log("userCity2" + userCity2);
    if(userCity1.gas < userCity2.gas){
        var diff = Math.round((userCity2.gas - userCity1.gas)*100)/100;
        return userCity1.city + "'s gas prices are $" + diff + " less than " + userCity2.city + "'s.";
    }else if (userCity1.gas > userCity2.gas){
        var diff = Math.round((userCity1.gas - userCity2.gas)*100)/100;
        return userCity1.city + "'s gas prices are $" + diff + " greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.gas == userCity2.gas){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s gas prices are equal to " +  userCity2.city + "'s.";
    }
});

Template.registerHelper("compareBus", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log(userCity1);
    console.log(userCity2);
    if(userCity1.bus < userCity2.bus){
        var diff = Math.round((userCity2.bus - userCity1.bus)*100)/100;
        return userCity1.city + "'s bus prices are $" + diff + " less than " + userCity2.city + "'s.";
    }else if (userCity1.bus > userCity2.bus){
        var diff = Math.round((userCity1.bus - userCity2.bus)*100)/100;
        return userCity1.city + "'s bus prices are $" + diff + " greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.bus == userCity2.bus){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s bus prices are equal to " +  userCity2.city + "'s.";
    }
});

Template.registerHelper("compareApt", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log(userCity1);
    console.log(userCity2);
    if(userCity1.onebedapt < userCity2.onebedapt){
        var diff = Math.round((userCity2.onebedapt - userCity1.onebedapt)*100)/100;
        return userCity1.city + "'s one bedroom apartment prices are $" + diff + " less than " + userCity2.city + "'s.";
    }else if (userCity1.onebedapt > userCity2.onebedapt){
        var diff = Math.round((userCity1.onebedapt - userCity2.onebedapt)*100)/100;
        return userCity1.city + "'s one bedroom apartment prices are $" + diff + " greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.onebedapt == userCity2.onebedapt){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s one bedroom apartment prices are equal to " +  userCity2.city + "'s.";
    }
});

Template.registerHelper("compareSalary", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log(userCity1);
    console.log(userCity2);
    if(userCity1.salary < userCity2.salary){
        var diff = Math.round((userCity2.salary - userCity1.salary)*100)/100;
        return userCity1.city + "'s average salary is $" + diff + " less than " + userCity2.city + "'s.";
    }else if (userCity1.salary > userCity2.salary){
        var diff = Math.round((userCity1.salary - userCity2.salary)*100)/100;
        return userCity1.city + "'s average salary is $" + diff + " greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.salary == userCity2.salary){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s average salary is equal to " +  userCity2.city + "'s.";
    }
});

Template.registerHelper("compareElectricity", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log(userCity1);
    console.log(userCity2);
    if(userCity1.electricity < userCity2.electricity){
        var diff = Math.round((userCity2.electricity - userCity1.electricity)*1000)/1000;
        return userCity1.city + "'s average electricity prices are $" + diff + " kWh less than " + userCity2.city + "'s.";
    }else if (userCity1.electricity > userCity2.electricity){
        var diff = Math.round((userCity1.electricity - userCity2.electricity)*1000)/1000;
        return userCity1.city + "'s average electricity prices are $" + diff + " kWh greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.electricity == userCity2.electricity){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s average electricity prices are equal to " +  userCity2.city + "'s.";
    }
});

Template.registerHelper("compareWater", function () {
    var userCity1 = Session.get("Cities1");
    var userCity2 = Session.get("Cities2");
    console.log(userCity1);
    console.log(userCity2);
    if(userCity1.water < userCity2.water){
        var diff = Math.round((userCity2.onebedapt - userCity1.onebedapt)*1000)/1000;
        return userCity1.city + "'s average water prices are $" + diff + " less than " + userCity2.city + "'s.";
    }else if (userCity1.water > userCity2.water){
        var diff = Math.round((userCity1.water - userCity2.water)*1000)/1000;
        return userCity1.city + "'s average water prices are $" + diff + " greater than " +  userCity2.city + "'s.";
    }
    else if (userCity1.water == userCity2.water){
//        var diff = userCity1.gas - userCity2.gas;
        return userCity1.city + "'s average water prices are equal to " +  userCity2.city + "'s.";
    }
});