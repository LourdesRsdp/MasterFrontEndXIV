import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-privatemenu',
  templateUrl: './privatemenu.component.html',
  styleUrl: './privatemenu.component.scss'
})
export class PrivatemenuComponent {

  isLogged: boolean = true;

  constructor(private router: Router, private authService: AuthService) {

  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

  gallery() {
    this.router.navigate(['gallery']);
  }

  crud() {
    this.router.navigate(['crud']);
  }

  profile() {
    this.router.navigate(['profile']);
  }

  logout() {
    this.authService.logout()
  }
}
