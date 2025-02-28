import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageNiveauComponent } from './pages/page-niveau/page-niveau.component';
import { PageClasseComponent } from './pages/page-classe/page-classe.component';
import { ListEtudiantComponent } from './pages/page-etudiant/list-etudiant/list-etudiant.component';
import { UpdateEtudiantComponent } from './pages/page-etudiant/update-etudiant/update-etudiant.component';
import { CreateEtudiantComponent } from './pages/page-etudiant/create-etudiant/create-etudiant.component';
import { ListUeComponent } from './pages/page-ue/list-ue/list-ue.component';
import { CreateUeComponent } from './pages/page-ue/create-ue/create-ue.component';
import { UpdateUeComponent } from './pages/page-ue/update-ue/update-ue.component';
import { ListMatiereComponent } from './pages/page-matiere/list-matiere/list-matiere.component';
import { CreateMatiereComponent } from './pages/page-matiere/create-matiere/create-matiere.component';
import { UpdateMatiereComponent } from './pages/page-matiere/update-matiere/update-matiere.component';
import { SaisirNoteComponent } from './pages/page-note/saisir-note/saisir-note.component';
import { FormulaireSaisieComponent } from './pages/page-note/formulaire-saisie/formulaire-saisie.component';
import { ListProfComponent } from './pages/page-prof/list-prof/list-prof.component';
import { UpdateProfComponent } from './pages/page-prof/update-prof/update-prof.component';
import { CreateProfComponent } from './pages/page-prof/create-prof/create-prof.component';
import { NoteEtudiantComponent } from './pages/page-etudiant/note-etudiant/note-etudiant.component';
import { ListDepartementComponent } from './pages/page-departement/list-departement/list-departement.component';
import { CreateDepartementComponent } from './pages/page-departement/create-departement/create-departement.component';
import { UpdateDepartementComponent } from './pages/page-departement/update-departement/update-departement.component';
import { ProfMatiereComponent } from './pages/page-prof/prof-matiere/prof-matiere.component';
import { CreatePaiementComponent } from './pages/page-paiement/create-paiement/create-paiement.component';
import { FormulairePaiementComponent } from './pages/page-paiement/formulaire-paiement/formulaire-paiement.component';
import { ListPaiementComponent } from './pages/page-paiement/list-paiement/list-paiement.component';
import { SituationPaiementComponent } from './pages/page-paiement/situation-paiement/situation-paiement.component';
import { ListPersonnelComponent } from './pages/page-personnel/list-personnel/list-personnel.component';
import { CreatePersonnelComponent } from './pages/page-personnel/create-personnel/create-personnel.component';
import { UpdatePersonnelComponent } from './pages/page-personnel/update-personnel/update-personnel.component';
import { PersonnelSalaireComponent } from './pages/page-personnel/personnel-salaire/personnel-salaire.component';
import { ListPretComponent } from './pages/page-personnel/list-pret/list-pret.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ListUserComponent } from './pages/page-user/list-user/list-user.component';
import { UpdateUserComponent } from './pages/page-user/update-user/update-user.component';
import { CreateUserComponent } from './pages/page-user/create-user/create-user.component';
import { CreateDepenseComponent } from './pages/page-depense/create-depense/create-depense.component';
import { UpdateDepenseComponent } from './pages/page-depense/update-depense/update-depense.component';
import { ListDepenseComponent } from './pages/page-depense/list-depense/list-depense.component';
import { ListAnneeComponent } from './pages/page-annee/list-annee/list-annee.component';
import { UpdateAnneeComponent } from './pages/page-annee/update-annee/update-annee.component';
import { CreateAnneeComponent } from './pages/page-annee/create-annee/create-annee.component';




const routes: Routes = [

  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: '',
    component: PageLoginComponent, canActivate: [AuthenticationGuard],
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent, canActivate: [AuthenticationGuard],
    children:[
      {
        path: 'dashboard/statistique',
        component: PageStatistiqueComponent
      },

      {
        path: 'niveau',
        component: PageNiveauComponent
      },

      {
        path: 'niveau/:idNiveau',
        component: PageNiveauComponent
      },

      {
        path: 'classe',
        component: PageClasseComponent
      },

      {
        path: 'classe/:idClasse',
        component: PageClasseComponent
      },
      {
        path: 'list-etudiant',
        component: ListEtudiantComponent
      },
      {
        path: 'update-etudiant/:idEtudiant',
        component: UpdateEtudiantComponent
      },
      {
        path: 'create-etudiant',
        component: CreateEtudiantComponent
      },
      {
        path: 'list-ue',
        component: ListUeComponent
      },
      {
        path: 'create-ue',
        component: CreateUeComponent
      },
      {
        path: 'update-ue/:idUe',
        component: UpdateUeComponent
      },
      {
        path: 'list-matiere',
        component: ListMatiereComponent
      },
      {
        path: 'create-matiere',
        component: CreateMatiereComponent
      },
      {
        path: 'update-matiere/:idMatiere',
        component: UpdateMatiereComponent
      },
      {
        path: 'note',
        component: SaisirNoteComponent
      },
      {
        path: 'saisie-de-note/:idEtudiant',
        component: FormulaireSaisieComponent
      },
      
      {
        path: 'create-prof',
        component: CreateProfComponent
      },
      {
        path: 'professeur-list',
        component: ListProfComponent
      },
      {
        path: 'update-prof/:idProf',
        component: UpdateProfComponent
      },
      {
        path: 'note-etudiant/:idEtudiant',
        component: NoteEtudiantComponent
      },
      {
        path: 'list-departement',
        component: ListDepartementComponent
      },
      {
        path: 'create-departement',
        component: CreateDepartementComponent
      },
      {
        path: 'update-departement/:idDepartement',
        component: UpdateDepartementComponent
      },
      {
        path: 'prof-matiere',
        component: ProfMatiereComponent
      },
      {
        path: 'ajouter-paiement',
        component: CreatePaiementComponent
      },
      {
        path: 'saisie-paiement/:idEtudiant',
        component: FormulairePaiementComponent
      },
      {
        path: 'list-paiement/:idEtudiant',
        component: ListPaiementComponent
      },
      {
        path: 'situation-paiement',
        component: SituationPaiementComponent
      },
      {
        path: 'list-personnel',
        component: ListPersonnelComponent
      },
      {
        path: 'create-personnel',
        component: CreatePersonnelComponent
      },
      {
        path: 'update-personnel/:idPersonnel',
        component: UpdatePersonnelComponent
      },
      {
        path: 'personnel-salaire',
        component: PersonnelSalaireComponent
      },
      {
        path: 'list-pret/:idPersonnel',
        component: ListPretComponent
      },
      {
        path: 'list-pret/:idPersonnel/:mois',
        component: ListPretComponent
      },
      {
        path: 'gestion-user/create-user',
        component: CreateUserComponent
      }
      ,
      {
        path: 'gestion-user/list-user',
        component: ListUserComponent
      }
      ,
      {
        path: 'gestion-user/update-user/:userId',
        component: UpdateUserComponent
      },
      {
        path: 'gestion-depense/create-depense',
        component: CreateDepenseComponent
      },
      {
        path: 'gestion-depense/list-depense',
        component: ListDepenseComponent
      },
      {
        path: 'gestion-depense/update-depense/:idDepense',
        component: UpdateDepenseComponent
      }, 
       {
        path: 'gestion-annee/list-annee',
        component: ListAnneeComponent
      }, 
      {
       path: 'gestion-annee/update-annee/:idAnnee',
       component: UpdateAnneeComponent
     }, 
     {
      path: 'gestion-annee/create-annee',
      component: CreateAnneeComponent
    }
    ] 
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
