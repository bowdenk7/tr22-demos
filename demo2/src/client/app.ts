import * as ng from "angular2/angular2";
import {showShipping} from "./shipping";

var setMaxWeight = (x) => null;

@ng.Component({
    selector: "item-list",
    template: `
<ul class="itemList">
  <li *ng-for='#item of items'>
    <span  class="itemName">{{item.name}}</span>
    <span  class="itemWeight">{{format(item.price)}}</span>
    <input class="itemAmount" type="number" min="0" max="200" [(ng-model)]="item.amount"/>
    <span  class="itemTotal">{{format(item.price * item.amount)}}</span>
    <span  class="itemOver" *ng-if="item.amount > weightLimit">Overweight for shipping method!</span>
  </li>
  <li>
    <span class="totalText">Total</span><span class="itemsTotal">{{getTotal()}}</span>
  </li>
</ul>
<div><i>Max weight per item for shipping method: {{weightLimit}}</i></div>
`,
    directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
})
export class ItemList {
    name: string;
    items = [
        {name: 'Apples', price: 4.95, amount: 0 },
        {name: 'Bananas', price: 2.50, amount: 0 },
        {name: 'Cherries', price: 9.00, amount: 0 } ];
    weightLimit = 100;

    constructor(private ref: ng.ChangeDetectorRef){
        this.name = "Bill";
        setMaxWeight = (weight) => {
            this.weightLimit = weight;
            ref.detectChanges();
        }
    }

    format(amount: number){
        return "$" + amount.toFixed(2);
    }

    getTotal() {
        let totalPrice = this.items.reduce((prev, curr) => prev + curr.amount * curr.price, 0);
        let totalWeight = this.items.reduce((prev, curr) => prev + curr.amount, 0);
        shipping.setState({shipWeight: totalWeight})
        return this.format(totalPrice);
    }
}

var shipping = showShipping(document.getElementById('greeting'),
    10, (e) => setMaxWeight(e));

ng.bootstrap(ItemList);
