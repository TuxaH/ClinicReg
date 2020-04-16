import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersModule} from './pages/users/users.module';
import {NotfoundModule} from './pages/notfound/notfound.module';
import {LoginModule} from './pages/login/login.module';
import {HomeModule} from './pages/home/home.module';
import {DoctorsModule} from './pages/doctors/doctors.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    NotfoundModule,
    LoginModule,
    HomeModule,
    DoctorsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
