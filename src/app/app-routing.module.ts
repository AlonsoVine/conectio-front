import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/login/login.component';
import { SignupComponent } from './pages/usuario/signup/signup.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/wellcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'wellcome', component: WellcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
