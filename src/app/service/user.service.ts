import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:5001";
  httpClient =inject(HttpClient);
  constructor() { }
getUsers(){
  return this.httpClient.get<User[]>(this.apiUrl+'/api/users');
}
addUser(model:User){
  return this.httpClient.post(this.apiUrl+'/api/users', model);
}
deleteUser(id: string) {
  return this.httpClient.delete(this.apiUrl + `/api/users/${id}`); 
}

}

//http://localhost:5001/api/events/
//http://localhost:5001/api/users/