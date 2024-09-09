import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Event from '../types/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = "http://localhost:5001";
  httpClient = inject(HttpClient);
  constructor() { }

  getEvents(){
    return this.httpClient.get<Event[]>(this.apiUrl+'/api/events');
  }
  addEvent(model:Event){
    return this.httpClient.post(this.apiUrl+'/api/events', model);
  }
}
