import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RechercheGuard } from './recherche.guard';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  { path : "recherche", component : RechercheComponent, canActivate:[RechercheGuard] },
  { path : "connexion", component : ConnexionComponent },
  { path : "home", component : HomeComponent},
  { path : "", redirectTo: "home", pathMatch: "full"},
  { path : "compte", component : CompteComponent},
  { path: 'forbidden', component: ForbiddenComponent},
  { path : "inscription", component: InscriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
