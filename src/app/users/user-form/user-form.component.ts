import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import User from '../../types/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {

  formBuilder= inject(FormBuilder);
  userForm:FormGroup= this.formBuilder.group({
    UserName:[''],
    ContactNo:[''],
    companyName:[''],

  });

  userService = inject(UserService);
  router = inject(Router)

  addUser(){
    const model:User= this.userForm.value;
    this.userService.addUser(model).subscribe({
      next: (result) => {
        alert('User added.');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error('Error adding user:', err);
      }
    });
  }
}