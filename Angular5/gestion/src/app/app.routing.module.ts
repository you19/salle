import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchComponent} from './reservation-match/match.component';
import { TournoiComponent} from './reservation-tournoi/tournoi.component';
import { CandidatureComponent } from './poster-condidature/condidature.component';
import { ProfilComponent } from './profil/profil.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { TournoieComponent } from './tournoi/tournoi.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ValiderTournoiComponent } from './validerTournoi/validerTournoi.component';
import { ValiderAbonnementComponent } from './validerAbonnement.1/validerAbonnement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { BlackComponent } from './black/black.component';
import { ClientComponent } from './client/client.component';
import { VisualiserComponent } from './visualiser/visualiser.component';
import { AjouterComponent } from './ajouterSalle/ajouter.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'message/:id',
    component: MessageComponent,
  },
  {
    path: 'utilisateur',
    component: HomeComponent,
    children: [ {
      path: 'dashboard',
      component: DashboardComponent,
      resolve: {
        produits: DashboardResolver
      },
      
    },
    {
      path: 'accessoire',
      component: AccessoireComponent,
      
    },
    {
      path: 'visualiser',
      component: VisualiserComponent,
      
    },
    {
        path: 'reservation-match',
        component:MatchComponent,
    
    },
    {
       path: 'reservation-tournoi',
       component:TournoiComponent,
       
     },
     {
      path: 'poster-condidature',
      component: CandidatureComponent,
     
    },

    {
      path: 'profil',
      component: ProfilComponent,
      
    },
    {
      path: 'abonnement',
      component: AbonnementComponent,
     
    },
    {
      path: 'tournoi',
      component:TournoieComponent,
     
    },
    {
      path: 'message',
      component: MessageComponent,
      
    },]
  },
  {
    path: 'fournisseur',
    component: Home2Component,
    children: [ {
      path: 'acceuil',
      component: AcceuilComponent,
     
    },
    {
      path: 'accessoire',
      component: AccessoireComponent,
    
    },
    {
      path: 'ajouterSalle',
      component: AjouterComponent,
     
    },
    {
        path: 'reservation-match',
        component:MatchComponent,
       
    },
    {
       path: 'valider-tournoi',
       component: ValiderTournoiComponent,
   
     },
     {
      path: 'poster-condidature',
      component: CandidatureComponent,
     
    },

    {
      path: 'profil',
      component: ProfilComponent,
      outlet: 'contentOutlet'
    },
    {
      path: 'valider-abonnement',
      component: ValiderAbonnementComponent,
 
    },
    {
      path: 'tournoi',
      component:TournoieComponent,
  
    },
    {
      path: 'message',
      component: MessageComponent,
      
    },
    {
      path: 'evenement',
      component: EvenementComponent,
    
    },
    {
      path: 'black',
      component: BlackComponent,
     
    },]
  },
     
      {
        path:'', redirectTo:'/login',pathMatch:'full'
      }
     

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [RouterModule],
  providers: [ DashboardResolver]
  
})
export class AppRoutingModule{

}