import { Routes } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './events/event-form/event-form.component';


export const routes: Routes = [

    {
        path: "",
        component: UsersComponent,
    },
    {
        path: "users",
        component: UsersComponent,
    },
    {
        path:"users/add",
        component : UserFormComponent,
    },

    {
        path: "events",
        component:EventsComponent, 
    },

    {
        path: "events/add",
        component:EventFormComponent, 
    }
];
