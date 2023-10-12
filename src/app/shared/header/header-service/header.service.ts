import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/api/self-profile`)
  }

}
