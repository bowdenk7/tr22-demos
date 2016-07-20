"use strict";
var ng = require("angular2/angular2");
var app_1 = require("./app");
var x = ng.Component;
var name = "MyApp";
var f = new app_1.ItemList(null);
f.name = "test";
var Bill = (function () {
    function Bill() {
        this.prop = 10;
        this.name = "test";
    }
    return Bill;
}());
exports.Bill = Bill;
var a1;
var a2;
var b = mixin(a1, a2);
