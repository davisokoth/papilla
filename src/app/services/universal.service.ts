import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../globals';
import { VitalModel } from '../models/vital';

@Injectable()
export class UniversalService {

  url = URL;
  logged = false;
  username: string;
  lToken: string;
  ad_user_id: number;
  ad_role_id: number;
  token: string;

  constructor(private http: Http) {}

  search(endPoint: String) {
    return this.http.get(this.url + endPoint)
      .map(response => response.json());
  }

  toModel (r: any): VitalModel {
    const vital = new VitalModel();
    vital.p_medicalnoteline_id = r.p_medicalnoteline_id;
    vital.p_visit_id = r.p_visit_id;
    vital.m_product_id = r.m_product_id;
    vital.notes = r.notes;
    return vital;
  }

  doPost(model: any, url: string): Observable<any> {
      return this.http.post(this.url + url, JSON.stringify(model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((res: any) => {
        const data = res.json();
        // console.log(data);
      });
  }

}
