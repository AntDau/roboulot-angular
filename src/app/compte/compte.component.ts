import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../model/user.model';
import { Observable } from 'rxjs'
import { UserServiceService } from '../api/user.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  currentUser: any;
  realCurrentUser: any;
  currentCompte : any;



  constructor(private storageService: StorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.userService.get(this.currentUser.id).subscribe((data) => {
      this.realCurrentUser = data;
      console.log(JSON.stringify(data));
    });
  }




  // user?: User;

  // constructor(private userService : UserServiceService) {
  // }

  // ngOnInit(): void {
  //   this.userService.getUser(1).subscribe(utilisateur => {
  //     console.log(utilisateur);
  //     this.user = utilisateur;
  //   })
  // }

}
