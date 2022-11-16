import { ICurrencyPB } from "./models/currencyPB";
import { Component, OnInit } from '@angular/core';

import { CurrencyService } from "./services/currency.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular APP';

  currencies: ICurrencyPB[] = []

  constructor (private currencyService: CurrencyService) {

  }
  ngOnInit(): void {
    this.currencyService.getAll().subscribe(currencyList=>{
      console.log(currencyList)
      this.currencies = currencyList
      console.log(this.currencies)
      console.log(this.currencies[0].ccy)

    })

    console.log(this.currencies)
    
  }

}