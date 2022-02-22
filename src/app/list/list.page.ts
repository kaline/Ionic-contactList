import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users = [];

  constructor(public location:  Location, public userService: UserService) {
    this.userService.listUsers().subscribe(usersData => {
      console.log(usersData);
      this.users = usersData;

    });
  }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }

}
