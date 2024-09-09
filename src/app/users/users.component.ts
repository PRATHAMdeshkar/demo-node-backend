import { Component, inject } from '@angular/core';
import User from '../types/user';
import { UserService } from '../service/user.service';
import { MatButtonModule } from '@angular/material/button';
import { RouteConfigLoadEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[]=[]; 
  userService = inject(UserService);
  ngOnInit(){
    this.userService.getUsers().subscribe(result=>{
      this.users = result
      console.log(this.users)
    })
  };

  delete(id:string){
this.userService.deleteUser(id).subscribe((result)=>{
  alert('User deleted');
  this.users = this.users.filter((u) => u._id !== id); 
})
  }
}


