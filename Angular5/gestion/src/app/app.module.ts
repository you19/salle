import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http' ;
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MatchComponent } from './reservation-match/match.component';
import { TournoiComponent } from './reservation-tournoi/tournoi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ContentComponent } from './content/content.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ProfilComponent} from './profil/profil.component';
import {  CandidatureComponent } from './poster-condidature/condidature.component';
import { AppRoutingModule } from './app.routing.module';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { TournoieComponent } from './tournoi/tournoi.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {TournoiService} from  './reservation-tournoi/tournoi.service';
import { AcceuilComponent, AcceuilTournoiComponent, AcceuilMatchComponent, AcceuilAbonnementComponent } from './acceuil/acceuil.component';
import {  MessageComponent } from './message/message.component';
import { HttpModule } from '@angular/http';
import { MatchService } from './reservation-match/match.service';
import { CandidatureService } from './poster-condidature/condidature.service';
import { MessageService } from './message/message.service';
import { AbonnementService } from './abonnement/abonnement.service';
import { AccessoireService } from './accessoire/accessoire.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Sidebar2Component } from './sidebar 2/sidebar2.component';
import { Home2Component } from './home2/home2.component';
import { ValiderTournoiComponent } from './validerTournoi/validerTournoi.component';
import { ValiderAbonnementComponent } from './validerAbonnement.1/validerAbonnement.component';
import { EvenementComponent } from './evenement/evenement.component';
import { BlackComponent } from './black/black.component';
import { EvenementService } from './evenement/evenement.service';
import { BlackService } from './black/black.service';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
import { VisualiserComponent } from './visualiser/visualiser.component';
import { AjouterComponent } from './ajouterSalle/ajouter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule, MatSelectModule, MatTabGroup, MatTabsModule, MatDialogModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { Globals } from './globals';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { DashboardService } from './dashboard/dashboard.service';

//import { Module } from 'module';
@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AcceuilComponent,
    MessageComponent ,
    AppComponent,
    MatchComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    CandidatureComponent,
    ProfilComponent,
    AbonnementComponent,
    TournoieComponent ,
    AccessoireComponent,
    TournoiComponent,
    Sidebar2Component,
    Home2Component,
    ValiderTournoiComponent,
    ValiderAbonnementComponent,
    EvenementComponent,
    BlackComponent,
    ClientComponent,
    VisualiserComponent,
    AjouterComponent,
    AcceuilTournoiComponent,
    AcceuilMatchComponent,
    AcceuilAbonnementComponent
  
  ],
  imports: [
    BrowserModule,NgbModule, AppRoutingModule,ReactiveFormsModule,FormsModule, HttpClientModule,MatFormFieldModule,MatAutocompleteModule,ReactiveFormsModule,FormsModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule,NoopAnimationsModule,MatInputModule,MatCheckboxModule,MatSelectModule,MatTabsModule,MatDialogModule
  ],
  providers: [TournoiService,MatchService, CandidatureService,MessageService, AbonnementService,AccessoireService,EvenementService,BlackService,ClientService,AppService,DashboardService,CookieService,
    Globals,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents:[MessageComponent,ClientComponent,AcceuilTournoiComponent,AcceuilMatchComponent,AcceuilAbonnementComponent]
})
export class AppModule { }
