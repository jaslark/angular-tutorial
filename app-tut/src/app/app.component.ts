import { Component, OnInit } from '@angular/core';
import { finalize, Observable, startWith, takeWhile, timer } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-tut';
  now = "2020-06-24T09:00:00.000Z";
  userId = "4321245";
  userIdChangeAfterFiveSeconds = "14324";

  users: User[] = [
    {
      name: "AA",
      age: 30
    },
    {
      name: "BB",
      age: 28
    },
    {
      name: "CCC",
      age: 29
    },
    {
      name: "DDD",
      age: 16
    }
  ];

  newUser: User;

  constructor() {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = new User();
  }

  addUserByUpdateReference() {
    this.users = [...this.users, this.newUser];
    this.newUser = new User();
  }
}
