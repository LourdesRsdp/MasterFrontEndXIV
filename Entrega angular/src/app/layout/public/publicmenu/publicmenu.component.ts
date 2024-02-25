import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicmenu',
  templateUrl: './publicmenu.component.html',
  styleUrl: './publicmenu.component.scss'
})
export class PublicmenuComponent {

  constructor(private router: Router) {

  }

  home() {
    this.router.navigate(['home']);
  }

  login() {
    this.router.navigate(['login']);
  }

  about() {
    this.router.navigate(['about']);
  }


}
