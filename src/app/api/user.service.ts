import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment as env } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user?: User;
  url_api = env.user_api
  constructor(private http : HttpClient) {

  }

  getUser(userId: number): Observable<User>{
    return this.http.get<User>(this.url_api + '/' + userId);
  }

}
