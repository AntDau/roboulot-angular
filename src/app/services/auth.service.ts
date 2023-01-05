import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

const AUTH_API = env.AUTH_API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  update() {
    
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }


//   users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
//                   {"username":"nadhem","password":"123","roles":['USER']} ];


//   public loggedUser!:string;
//   public isloggedIn: Boolean = false;
//   public roles!:string[];

//   constructor(private router : Router) { }

//   SignIn(user :User):Boolean{
//     let validUser: Boolean = false;
//     this.users.forEach((curUser) => {
//     if(user.username== curUser.username && user.password==curUser.password) {
//     validUser = true;
//     this.loggedUser = curUser.username!;
//     this.isloggedIn = true;
//     this.roles = curUser.roles!;
//     localStorage.setItem('loggedUser',this.loggedUser);
//     localStorage.setItem('isloggedIn',String(this.isloggedIn));
//     }
//     });
//     return validUser;
//     }

//     isUser():Boolean{
//       if (!this.roles) //this.roles== undefined
//         return false;
//       return (this.roles.indexOf('USER') >-1);
//     }


//     logout() {
//       this.isloggedIn= false;
//       this.loggedUser = undefined!;
//       this.roles = undefined!;
//       localStorage.removeItem('loggedUser');
//       localStorage.setItem('isloggedIn',String(this.isloggedIn));
//       this.router.navigate(['/connexion']);
//       }

//       setLoggedUserFromLocalStorage(login : string) {
//         this.loggedUser = login;
//         this.isloggedIn = true;
//         this.getUserRoles(login);
//         }

//       getUserRoles(username :string){
//         this.users.forEach((curUser) => {
//         if( curUser.username == username ) {
//         this.roles = curUser.roles!;
//         }
//         });
// }
}
