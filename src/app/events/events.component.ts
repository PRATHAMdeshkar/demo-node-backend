import { Component, inject } from '@angular/core';
import { EventService } from '../service/event.service';
import Event from '../types/event';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})

export class EventsComponent {
  events: Event[]=[]; 
  eventService = inject(EventService);
  ngOnInit(){
    this.eventService.getEvents().subscribe(result=>{
      this.events = result
      console.log(this.events)
    })
};

delete(id:string){
  this.eventService.deleteEvent(id).subscribe((result)=>{
    alert('Event deleted');
    this.events = this.events.filter((u) => u._id !== id); 
  })
    }
}