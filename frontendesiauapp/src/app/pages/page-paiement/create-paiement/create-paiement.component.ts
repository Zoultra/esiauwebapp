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

 myFilterText2!:any
 title = 'Pagination'
 page: number = 1
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [5, 10, 15, 20]
 
  constructor(private etudiantService: EtudiantService,private classeService: ClasseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiants()
    
  this.classeService.getClasseList()
  .subscribe(classes => {
    this.listClasse = classes;
  });
    
    
  }

  
 // Methode pour recuperer la liste de tous les niveaux
 private getEtudiants() {
  this.etudiantService.getEtudiantList().subscribe(data => {
    this.listEtudiant = data;
});
}

onTableDataChange(event: any){
  this.page = event;
  this.getEtudiants()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getEtudiants()
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
