import { Injectable } from '@angular/core';

@Injectable()
export default class UserService {
  PROFILE_ENDPOINT = 'http://localhost:3000/api/profile/';
  LOGIN_ENDPOINT =  'http://localhost:3000/api/login';
  REGISTER_ENDPOINT = 'http://localhost:4000/api/register';

  findUserById(userId) {
    return fetch(this.PROFILE_ENDPOINT + userId)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch(this.PROFILE_ENDPOINT)
      .then(response => response.json());
  }

  findUserByCredentials(username, password) {
    const credentials = {
      username,
      password
    };
    return fetch(this.LOGIN_ENDPOINT, {
      method: 'post',
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateProfile(userId, model) {
    return fetch(this.PROFILE_ENDPOINT + userId, {
      method: 'put',
      body: JSON.stringify(model),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => (response))
        .catch(error => alert('Update error: ' + error));
  }

  deleteProfile(userId) {
    return fetch(this.PROFILE_ENDPOINT + userId, {
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
    return fetch(this.REGISTER_ENDPOINT, {
      body: JSON.stringify(user),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
