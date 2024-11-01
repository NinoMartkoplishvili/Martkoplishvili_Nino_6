import { Component } from '@angular/core';
import { DisplayService } from 'src/app/display.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private displayService: DisplayService){}
  users:Users [] = [
    {
      FirstName: 'jora',
      LastName: 'mamulidze'
    },
    {
      FirstName: 'manana',
      LastName: 'skvartashvili'
    }
   
  ];
  
displayArray(){
  this.displayService.Log(this.users);
}
}
