import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import {NgxPaginationModule} from 'ngx-pagination'
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
import { CreateMatiereComponent } from './pages/page-matiere/create-matiere/create-matiere.component';
import { ListMatiereComponent } from './pages/page-matiere/list-matiere/list-matiere.component';
import { UpdateMatiereComponent } from './pages/page-matiere/update-matiere/update-matiere.component';
import { SaisirNoteComponent } from './pages/page-note/saisir-note/saisir-note.component';
import { FormulaireSaisieComponent } from './pages/page-note/formulaire-saisie/formulaire-saisie.component';
import { CreateProfComponent } from './pages/page-prof/create-prof/create-prof.component';
import { ListProfComponent } from './pages/page-prof/list-prof/list-prof.component';
import { UpdateProfComponent } from './pages/page-prof/update-prof/update-prof.component';
import { NoteEtudiantComponent } from './pages/page-etudiant/note-etudiant/note-etudiant.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateDepartementComponent } from './pages/page-departement/create-departement/create-departement.component';
import { ListDepartementComponent } from './pages/page-departement/list-departement/list-departement.component';
import { UpdateDepartementComponent } from './pages/page-departement/update-departement/update-departement.component';
import { ProfMatiereComponent } from './pages/page-prof/prof-matiere/prof-matiere.component';
import { CreatePaiementComponent } from './pages/page-paiement/create-paiement/create-paiement.component';
import { ListPaiementComponent } from './pages/page-paiement/list-paiement/list-paiement.component';
import { UpdatePaiementComponent } from './pages/page-paiement/update-paiement/update-paiement.component';
import { FormulairePaiementComponent } from './pages/page-paiement/formulaire-paiement/formulaire-paiement.component';
import { SituationPaiementComponent } from './pages/page-paiement/situation-paiement/situation-paiement.component';
import { CreatePersonnelComponent } from './pages/page-personnel/create-personnel/create-personnel.component';
import { UpdatePersonnelComponent } from './pages/page-personnel/update-personnel/update-personnel.component';
import { ListPersonnelComponent } from './pages/page-personnel/list-personnel/list-personnel.component';
import { PersonnelSalaireComponent } from './pages/page-personnel/personnel-salaire/personnel-salaire.component';
import { ListPretComponent } from './pages/page-personnel/list-pret/list-pret.component';
import { ListUserComponent } from './pages/page-user/list-user/list-user.component';
import { UpdateUserComponent } from './pages/page-user/update-user/update-user.component';
import { CreateUserComponent } from './pages/page-user/create-user/create-user.component';
import { CreateDepenseComponent } from './pages/page-depense/create-depense/create-depense.component';
import { ListDepenseComponent } from './pages/page-depense/list-depense/list-depense.component';
import { UpdateDepenseComponent } from './pages/page-depense/update-depense/update-depense.component';




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
    UpdateUeComponent,
    CreateMatiereComponent,
    ListMatiereComponent,
    UpdateMatiereComponent,
    SaisirNoteComponent,
    FormulaireSaisieComponent,
    CreateProfComponent,
    ListProfComponent,
    UpdateProfComponent,
    NoteEtudiantComponent,
    CreateDepartementComponent,
    ListDepartementComponent,
    UpdateDepartementComponent,
    ProfMatiereComponent,
    CreatePaiementComponent,
    ListPaiementComponent,
    UpdatePaiementComponent,
    FormulairePaiementComponent,
    SituationPaiementComponent,
    CreatePersonnelComponent,
    UpdatePersonnelComponent,
    ListPersonnelComponent,
    PersonnelSalaireComponent,
    ListPretComponent,
    ListUserComponent,
    UpdateUserComponent,
    CreateUserComponent,
    CreateDepenseComponent,
    ListDepenseComponent,
    UpdateDepenseComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
