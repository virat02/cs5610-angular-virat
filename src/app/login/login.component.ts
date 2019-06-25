import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserService from '../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  login(username, password) {
    this.userService.findUserByCredentials(username, password)
      .then(response => response.json())
      .then(user => {
          user != null ?
            this.router.navigate(['profile', user._id])
            :
            alert('User does not exist!');
        }
      );
    }
}
