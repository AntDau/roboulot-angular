import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public storageService : StorageService) {}


  ngOnInit(): void {
  }

  logout() {
    this.storageService.clean();
  }


  // constructor(public authService: AuthService) { }

  // ngOnInit(): void {
  // }

  // onLogout(){
  //   this.authService.logout();
  // }

}
