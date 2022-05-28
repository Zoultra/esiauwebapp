import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { PageNiveauComponent } from './pages/page-niveau/page-niveau.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateNiveauComponent } from './pages/page-niveau/update-niveau/update-niveau/update-niveau.component';
import { NgToastModule } from 'ng-angular-popup';
import { PageClasseComponent } from './pages/page-classe/page-classe.component';
import { CreateEtudiantComponent } from './pages/page-etudiant/create-etudiant/create-etudiant.component';
import { UpdateEtudiantComponent } from './pages/page-etudiant/update-etudiant/update-etudiant.component';
import { ListEtudiantComponent } from './pages/page-etudiant/list-etudiant/list-etudiant.component';
import { CreateUeComponent } from './pages/page-ue/create-ue/create-ue.component';
import { ListUeComponent } from './pages/page-ue/list-ue/list-ue.component';
import { UpdateUeComponent } from './pages/page-ue/update-ue/update-ue.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    BouttonActionComponent,
    PageNiveauComponent,
    UpdateNiveauComponent,
    PageClasseComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent,
    ListEtudiantComponent,
    CreateUeComponent,
    ListUeComponent,
    UpdateUeComponent 
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
