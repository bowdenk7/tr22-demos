"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng = require("angular2/angular2");
var shipping_1 = require("./shipping");
var setMaxWeight = function (x) { return null; };
var ItemList = (function () {
    function ItemList(ref) {
        var _this = this;
        this.ref = ref;
        this.items = [
            { name: 'Apples', price: 4.95, amount: 0 },
            { name: 'Bananas', price: 2.50, amount: 0 },
            { name: 'Cherries', price: 9.00, amount: 0 }];
        this.weightLimit = 100;
        this.name = "Bill";
        setMaxWeight = function (weight) {
            _this.weightLimit = weight;
            ref.detectChanges();
        };
    }
    ItemList.prototype.format = function (amount) {
        return "$" + amount.toFixed(2);
    };
    ItemList.prototype.getTotal = function () {
        var totalPrice = this.items.reduce(function (prev, curr) { return prev + curr.amount * curr.price; }, 0);
        var totalWeight = this.items.reduce(function (prev, curr) { return prev + curr.amount; }, 0);
        shipping.setState({ shipWeight: totalWeight });
        return this.format(totalPrice);
    };
    ItemList = __decorate([
        ng.Component({
            selector: "item-list",
            template: "\n<ul class=\"itemList\">\n  <li *ng-for='#item of items'>\n    <span  class=\"itemName\">{{item.name}}</span>\n    <span  class=\"itemWeight\">{{format(item.price)}}</span>\n    <input class=\"itemAmount\" type=\"number\" min=\"0\" max=\"200\" [(ng-model)]=\"item.amount\"/>\n    <span  class=\"itemTotal\">{{format(item.price * item.amount)}}</span>\n    <span  class=\"itemOver\" *ng-if=\"item.amount > weightLimit\">Overweight for shipping method!</span>\n  </li>\n  <li>\n    <span class=\"totalText\">Total</span><span class=\"itemsTotal\">{{getTotal()}}</span>\n  </li>\n</ul>\n<div><i>Max weight per item for shipping method: {{weightLimit}}</i></div>\n",
            directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [ng.ChangeDetectorRef])
    ], ItemList);
    return ItemList;
}());
exports.ItemList = ItemList;
var shipping = shipping_1.showShipping(document.getElementById('greeting'), 10, function (e) { return setMaxWeight(e); });
ng.bootstrap(ItemList);
