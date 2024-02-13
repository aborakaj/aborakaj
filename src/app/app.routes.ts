import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { AddUserComponent } from './features/add-user/add-user.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  {path: 'home', component: LandingPageComponent},
  {path: 'user', component: AddUserComponent},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, //commentet for testing purposes
  { path: '**', redirectTo: 'auth/login' },
  
];
export {routes};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}