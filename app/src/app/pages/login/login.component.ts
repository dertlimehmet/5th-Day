import { Component } from '@angular/core';
import { UserStateService } from '../../service/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userState:UserStateService){}

  login(){
    this.userState.currentUser={id:1,name:"mehmet",email:"mehmet@mail.com"}
  }

  change(){
    //null değil,erişilebilir   (currentUser!)
    this.userState.currentUser!.email="hasan@mail.com"
  }
}
