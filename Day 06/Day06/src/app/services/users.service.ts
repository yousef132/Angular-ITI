import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private DB_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private myClient: HttpClient) {}

  getAllUsers() {
   return this.myClient.get(this.DB_URL);
  }
  GetUserById(id: number) {
    return this.myClient.get(this.DB_URL + '/' + id);
  }
}
