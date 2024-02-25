import { EventEmitter, Injectable } from '@angular/core';
import { UserEntity } from '../model/user-entity';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  UserEntity: { username: string; password: string; };
  wrongLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { 
    this.UserEntity = {
      username : "master@lemoncode.net",
      password : "12345678"
    }
  }

  login(user: UserEntity): boolean{
    if (user.username == "master@lemoncode.net" && user.password == "12345678") {
      this.router.navigate(['dashboard']);
      localStorage.setItem('userName', user.username);
      return true
    }else {
      
      this.wrongLogin.emit(true);
      alert('Wrong username or wrong password');
      
      return false
    }
    
  }

  public logout(): void {
    this.router.navigate(['home']);
    localStorage.removeItem('userName');
  }

  isLogged(): boolean {
    var authKey = localStorage.getItem('userName');
    if (authKey == null) {
      return false
    } else {
      return true
    }
    
  }
  
   setUsername(username: string): void {
    this.UserEntity.username = username;
  }

  getUsername(): string {
    return this.UserEntity.username;
  }
  
}
