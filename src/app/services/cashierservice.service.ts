import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {URL} from '../globals';

@Injectable()
export class CashierserviceService {

	url = URL;
  constructor(private http: Http) { }

  getBills(): Observable<any[]> {

    const bills$ = this.http
      .get(`${this.url}v_billings`)
      .map(response => response.json());
      return bills$;
  }

  getBillDetails(b_billing_id: number): Observable<any[]> {

    const billDetails$ = this.http
      .get(`${this.url}v_billinglines?filter[where][b_billing_id]=${b_billing_id}`)
      .map(response => response.json());
      return billDetails$;
  }

  postPayment(model) {
    return this.http.post(this.url + 'b_payments', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .map((res: any) => {
      const data = res.json();
      
    });
  }

}
