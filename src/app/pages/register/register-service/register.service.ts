import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  public registerUser(payload: {name: string, username: string, password: string, telfone: string}): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/api/users/`, payload)
  }
}
