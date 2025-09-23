import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { environment } from '../../environment/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  loading = new BehaviorSubject<boolean>(false);
  userInfo = undefined;
  constructor(private http: HttpClient) {}

  showSpinner() {
    this.loading.next(true);
  }

  hideSpinner() {
    this.loading.next(false);
  }

  extractData(res: any) {
    this.hideSpinner();
    return res;
  }

  handleError(err: any) {
    this.hideSpinner();
    return err.message;
  }

  setUserInfo(data: any) {
    this.userInfo = data;
  }

  getUserinfo(): Observable<any> {
    this.showSpinner();
    let url = environment.baseUrl + '/user/2';

    return this.http.get(url).pipe(
      map(
        this.extractData.bind(this),
        catchError((err) => this.handleError(err))
      )
    );
  }

  sendContactData(data: any): Observable<any> {
    let url = environment.baseUrl + '/portfolio/contact';

    return this.http.post(url, data).pipe(
      map(
        this.extractData.bind(this),
        catchError((err) => this.handleError(err))
      )
    );
  }
}
