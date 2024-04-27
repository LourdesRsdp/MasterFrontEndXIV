import { Component } from '@angular/core';
import { UserEntity } from '../../model/user-entity';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  value='ClearMe'
  wrongLogin: boolean = false;

  user: UserEntity = {
    username : "",
    password : ""
  }
  
  constructor(private authService: AuthService ) {
  }
  
  ngOnInit() {
    this.authService.wrongLogin.subscribe( x => {
      this.user.username = "";
      this.user.password = "";
      
    });
  }
  public submit(): void {
    this.authService.login(this.user);
  }

}



