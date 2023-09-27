import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(
    private http: HttpClient,
  ) { }

  public registerReceita(payload: {entrada: number}): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/api/receitas`, payload)
  }

  public getReceita(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/api/receitas`)
  }

  public updateReceita(data: any, receitaId: string): Observable<any>{
    return this.http.patch(`${environment.BASE_URL}/api/receitas/${receitaId}`, data)
  }

  public registerDespesa(payload: {entrada: number}): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/api/despesas`, payload)
  }

  public getDespesa(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/api/despesas`)
  }

  public updateDespesa(data: any, despesaId: string): Observable<any>{
    return this.http.patch(`${environment.BASE_URL}/api/despesas/${despesaId}`, data)
  }

}
