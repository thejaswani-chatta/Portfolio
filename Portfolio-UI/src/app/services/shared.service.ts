import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  extractData(res: any) {
    return res
  }

  handleError(err: any) {
    return err.message
  }

  getUserinfo(): Observable<any> {
    let url = environment.baseUrl + '/user/2';

    return this.http.get(url).pipe(map(this.extractData.bind(this),
      catchError((err) => this.handleError(err))))
  }
}
