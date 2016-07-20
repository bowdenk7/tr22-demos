/// <reference path="../typings/react.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var deliveryOptions = [
    ["Standard", 4.95, 100],
    ["Two days", 10, 50],
    ["Overnight", 19.95, 10]
];
var Shipping = (function (_super) {
    __extends(Shipping, _super);
    function Shipping() {
        _super.call(this);
        this.state = { shipPrice: 4.95, shipWeight: 0 };
    }
    Shipping.prototype.render = function () {
        var _this = this;
        return React.createElement("div", null, "Delivery method: ", React.createElement("select", {onChange: function (evt) { return _this.update(evt); }}, deliveryOptions.map(function (opt, idx) { return React.createElement("option", {key: idx}, opt[0]); })), React.createElement("br", null), React.createElement("div", null, "Weight: ", React.createElement("b", null, this.state.shipWeight, "lb")), React.createElement("div", null, "Cost: ", React.createElement("b", null, "$" + this.state.shipPrice.toFixed(2))));
    };
    Shipping.prototype.update = function (evt) {
        var idx = evt.target.selectedIndex;
        this.setState({ shipPrice: deliveryOptions[idx][1] });
        this.props.changed(deliveryOptions[idx][2]);
    };
    return Shipping;
}(React.Component));
exports.Shipping = Shipping;
function showShipping(elem, size, changed) {
    return React.render(React.createElement(Shipping, {size: size, changed: changed}), elem);
}
exports.showShipping = showShipping;
