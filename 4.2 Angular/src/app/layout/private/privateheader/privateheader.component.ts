import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privateheader',
  templateUrl: './privateheader.component.html',
  styleUrl: './privateheader.component.scss'
})
export class PrivateheaderComponent {

  username: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  home() {
    this.router.navigate(['home']);
  }
}
