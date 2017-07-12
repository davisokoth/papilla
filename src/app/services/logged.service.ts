import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {BehaviorSubject} from 'rxjs/Rx';

export class LoggedService {

  // private loggedObserver: any;
  public logged: boolean;
  private _loggedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this._loggedSubject.next(false);
  }

  isLoggedin(): Observable<boolean> {
    return this._loggedSubject;
  }

  login(token: any) {
    console.log(JSON.stringify(token));
    localStorage.setItem('token', token);
    this.logged = true;
    localStorage.setItem('logged', 'true');
    localStorage.setItem('name', token.name);
    localStorage.setItem('ad_user_id', token.ad_user_id);
    localStorage.setItem('user', JSON.stringify(token));
    this._loggedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this._loggedSubject.next(false);
    this.logged = false;
    localStorage.removeItem('name');
    localStorage.removeItem('ad_user_id');
    localStorage.setItem('logged', 'false');
  }
}
