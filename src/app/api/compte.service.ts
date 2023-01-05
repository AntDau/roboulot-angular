import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  compte = env.compte_api;
  constructor(private http : HttpClient) { }

  getCompte(compteId: number): Observable<>

}
