import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

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
    let url = 'http://localhost:3000/user/2';

    return this.http.get(url).pipe(map(this.extractData.bind(this),
      catchError((err) => this.handleError(err))))
  }
}
