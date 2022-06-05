import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public menuProperties: Array<Menu> = [ 
    {
    id:'1',
    titre:'Tableau de bord',
    icon:'fas fa-chart-line',   
    url:'',
    sousMenu: [
      {
        id:'11',
        titre:'Vue d\'ensemble',
        icon:'fas fa-chart-pie',
        url:''
      },
      {
        id:'12',
        titre:'Statistique',
        icon:'fas fa-chart-bar',
        url:'statistique'
      }
    ]
  },

  {
    id:'2',
    titre:'Niveaux',
    icon:'fas fa-sitemap',
    url:'',
    sousMenu: [
      {
        id:'21',
        titre:'Gestion des niveaux',
        icon:'fas fa-edit',
        url:'niveau'
      },
      {
        id:'12',
        titre:'Niveau / Etudiants',
        icon:'fa fa-info-circle',
        url:'niveauEetudiant'
      }
    ]
  },
  {
    id:'3',
    titre:'Classes',
    icon:'fas fa-cubes',
    url:'',
    sousMenu: [
      {
        id:'31',
        titre:'Gestion des classes',
        icon:'fas fa-edit',
        url:'classe'
      },
      {
        id:'32',
        titre:'Classes / Etudiants',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'4',
    titre:'Etudiants',
    icon:'fa fa-users',
    url:'',
    sousMenu: [
      {
        id:'41',
        titre:'Gestion des etudiants',
        icon:'fas fa-edit',
        url:'list-etudiant'
      },
      {
        id:'42',
        titre:'Etudiant / Paiements',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'5',
    titre:'UE',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'51',
        titre:'Gestion des UEs',
        icon:'fas fa-edit',
        url:'list-ue'
      },
      {
        id:'52',
        titre:'UE / Matieres',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'6',
    titre:'Matières',
    icon:'fa fa-book',
    url:'',
    sousMenu: [
      {
        id:'61',
        titre:'Gestion des matières',
        icon:'fa fa-edit',
        url:'list-matiere'
      },
      {
        id:'62',
        titre:'Matières / Examens',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'7',
    titre:'Notes',
    icon:'fas fa-plus',
    url:'',
    sousMenu: [
      {
        id:'71',
        titre:'Saisir note',
        icon:'fa fa-edit',
        url:'note'
      },
      {
        id:'72',
        titre:'Notes / Classes',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'8',
    titre:'Professeurs',
    icon:'fas fa-user-secret',
    url:'',
    sousMenu: [
      {
        id:'81',
        titre:'Gestion des professeurs',
        icon:'fa fa-edit',
        url:''
      },
      {
        id:'82',
        titre:'Professeurs / Matières',
        icon:'fa fa-info-circle',
        url:''
      }
    ]
  },
  {
    id:'9',
    titre:'Parametrages',
    icon:'fa fa-tasks',
    url:'',
    sousMenu: [
      {
        id:'91',
        titre:'Utilisateurs',
        icon:'fa fa-user',
        url:''
      }
       
    ]
  }
];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url])
    .then(() => {
      window.location.reload();
    });;;
  }

}
