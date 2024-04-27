import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PublicheaderComponent } from './layout/public/publicheader/publicheader.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicmenuComponent } from './layout/public/publicmenu/publicmenu.component';
import { PrivatemenuComponent } from './layout/private/privatemenu/privatemenu.component';
import { PrivateheaderComponent } from './layout/private/privateheader/privateheader.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DashboardComponent } from './layout/private/dashboard/dashboard.component';
import { CrudComponent } from './layout/private/crud/crud.component';
import { ProfileComponent } from './layout/private/profile/profile.component';
import { AppLogoComponent } from './logo/layout/app-logo/app-logo.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PublicheaderComponent,
    FooterComponent,
    PublicmenuComponent,
    PrivatemenuComponent,
    PrivateheaderComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent,
    AppLogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
