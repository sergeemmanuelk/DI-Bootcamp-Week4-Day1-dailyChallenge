import { Component } from '@angular/core';


export type User = {
    firstName : string ,
    lastName  : string,
    profilePicture: string
}

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
    user : User = {
        firstName  : "Serge",
        lastName : "KONAN",
        profilePicture : "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg"
    }
   
    getFullName() : string {
        return this.user.firstName + " " + this.user.lastName
    }
}
