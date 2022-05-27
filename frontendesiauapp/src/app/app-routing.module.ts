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



const routes: Routes = [

  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children:[
      {
        path: 'statistique',
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
        path: 'etudiant/:idEtudiant',
        component: UpdateEtudiantComponent
      },
      {
        path: 'create-etudiant',
        component: CreateEtudiantComponent
      }
    ] 
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }