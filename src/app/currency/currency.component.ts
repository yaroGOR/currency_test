import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyPB } from '../models/currencyPB';

import { NgModule } from '@angular/core';
  
// Importing forms module
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent  {
  @Input() data: ICurrencyPB[] = [];

  amountBuy : number = 0;
  amountSell : number = 0;
  buy_ccy : string = '';
  sell_ccy : string = '';

  constructor() { }
  


  change(event) {
    console.log(this.data)
    console.log(event.target.value);
    console.log(event.target)
    console.log(NgModel)
  }
  getValue (value) {
    console.log(value)
    return value
  }

  countSell(type, amount, buy_ccy, sell_ccy){

    if (type === 'buy') {
      

    }
    else if (type === 'sell'){

    }
    else {
      console.log('unknown operation type. Do you want to buy or to sell?')
    }
    

    console.log(this.amountBuy,' ', this.amountSell, ' ', this.buy_ccy, ' ', this.sell_ccy)
  }
  
}