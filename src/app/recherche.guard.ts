import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RechercheGuard implements CanActivate {

  constructor (private StorageService: StorageService,
    private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.StorageService.isLoggedIn())
    return true;
    else
    {
    this.router.navigate(['forbidden']);
    return false;
    }

}
}
