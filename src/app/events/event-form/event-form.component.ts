import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import Event from '../../types/event';
import { MatSelectModule } from '@angular/material/select';
import User from '../../types/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule,MatSelectModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit{
  
    users : User[] = [];
    formBuilder= inject(FormBuilder);
    eventForm:FormGroup= this.formBuilder.group({
      EventName:[''],
      Description:[''],
      userId:[''],
  
    });

    eventService = inject(EventService);
    userService = inject(UserService);
    router = inject(Router)

    ngOnInit() {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
    }

    addEvent(){
      const model:Event= this.eventForm.value;
      console.log("Payload to be sent: ", model); 
      this.eventService.addEvent(model).subscribe({
        next: (result) => {
          alert('Event Created.');
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error('Error creating event:', err);
        }
      });
    }
}
