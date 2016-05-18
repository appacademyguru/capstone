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
    Router.route('/cityStats2', function(){
        this.render('/cityStats2');
    });
    Router.route('/error', function(){
        this.render('/error');
    });