import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './shared/guards/login.guard';
import {AdminGuard} from './shared/guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [LoginGuard] },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [LoginGuard] },
  { path: 'doctors', loadChildren: () => import('./pages/doctors/doctors.module').then(m => m.DoctorsModule), canActivate: [LoginGuard] },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), canActivate: [LoginGuard, AdminGuard] },
  { path: 'login', pathMatch: 'full', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
