import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';

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
