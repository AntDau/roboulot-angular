import { environment as env } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  offres_url = env.offres_api_express;

  getAllOffres() {
    return this.http.get(this.offres_url)
  }


}
