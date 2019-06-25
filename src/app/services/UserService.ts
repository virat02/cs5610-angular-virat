import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  findUserById(userId) {
    return fetch('http://localhost:3000/api/profile/' + userId)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch('http://localhost:3000/api/profile')
      .then(response => response.json());
  }

  findUserByCredentials(username, password) {
    const credentials = {
      username,
      password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateProfile(userId, model) {
    return fetch('http://localhost:4000/api/profile/' + userId, {
      method: 'put',
      body: JSON.stringify(model),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => (response)).catch(error => {
      alert('Update error: ' + error);
    });
  }

  deleteProfile(userId) {
    return fetch('http://localhost:4000/api/profile/' + userId, {
      method: 'delete',
      credentials: 'include'
    });
  }

  createUser(firstName, lastName, username, password) {
    const user = {
      firstName,
      lastName,
      username,
      password
    };
    return fetch('http://localhost:4000/api/register', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => (
      response.json()
    ));
  }
}
