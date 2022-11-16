import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyPB } from '../models/currencyPB';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() data: ICurrencyPB[] = [];

  constructor() { }
    
  

}
