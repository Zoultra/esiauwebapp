import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { ClasseService } from 'src/app/composants/services/classe.service';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-paiement',
  templateUrl: './create-paiement.component.html',
  styleUrls: ['./create-paiement.component.scss']
})
export class CreatePaiementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  listClasse: Array<any> = [];
 listEtudiant: Array<Etudiant> = [];
 toasts: any[] = [];
 myFilterText!:any
 
  constructor(private etudiantService: EtudiantService,private classeService: ClasseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiants()
    
  this.classeService.getClasseList()
  .subscribe(classes => {
    this.listClasse = classes;
  });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
      stateSave: true,
    /*  language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },*/
  }
    
  }

  
 // Methode pour recuperer la liste de tous les niveaux
 private getEtudiants() {
  this.etudiantService.getEtudiantList().subscribe(data => {
    this.listEtudiant = data;
});
}
   ajouterPaiement(idEtudiant: number){
    this.router.navigate(['dashboard/saisie-paiement',idEtudiant]);
   }

   consulterPaiement(idEtudiant: number){
    this.router.navigate(['dashboard/list-paiement',idEtudiant]);
   }


/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}
}
