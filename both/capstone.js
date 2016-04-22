"use strict";
    
    
    Router.route('/', function () {
        this.render('home');
    });
    Router.route('/goCompare', function () {
        this.render('goCompare');
    });
    Router.route('/cityStats', function () {
        this.render('cityStats');
    });