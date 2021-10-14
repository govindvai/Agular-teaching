import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GetAlertComponent } from './get-alert/get-alert.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', redirectTo: '/Auth', pathMatch: 'full' },
  { path: 'Auth', component: AuthComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'GetAlert', component: GetAlertComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }