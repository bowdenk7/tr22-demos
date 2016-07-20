import * as ng from "angular2/angular2";
import {ItemList} from "./app";

var x = ng.Component;
var name = "MyApp";

var f = new ItemList(null);
f.name = "test";

export class Bill {
    prop = 10;
    name = "test";
}


// Intersection types
declare function mixin<S, T>(s: S, t: T): S & T;

var a1: Array<string>;
var a2: HTMLElement;

var b = mixin(a1, a2);