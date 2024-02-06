import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features-or-modules/login/login.component';
import { HomeComponent } from './features-or-modules/home/home.component';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, //commentet for testing purposes
  { path: '**', redirectTo: 'auth/login' },
  
];
export {routes};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
