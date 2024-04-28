import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladeComponent } from './components/salade/salade.component';
import { VoirTousComponent } from './components/voir-tous/voir-tous.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { PatisserieComponent } from './components/patisserie/patisserie.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';

const routes: Routes = [
  {path: "", component: VoirTousComponent},
  {path: "voirTous", component: VoirTousComponent},
  {path: "salade", component: SaladeComponent},
  {path: "cuisine", component: CuisineComponent},
  {path: "patisserie", component: PatisserieComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
