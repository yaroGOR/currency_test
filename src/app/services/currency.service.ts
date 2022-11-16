import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { ICurrencyPB } from "../models/currencyPB";


@Injectable({
    providedIn: 'root'

})
export class CurrencyService {
    constructor(private http: HttpClient) {
    }
    
    getAll() {
        const headers = new Headers();
      
        return  this.http.get<ICurrencyPB[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')
        
    }
}