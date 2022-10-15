import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../../../composants/services/etudiant.service';
import { NgToastService } from 'ng-angular-popup';
import { ClasseService } from '../../../composants/services/classe.service';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { AuthenticationService } from '../../../composants/services/authentication.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  listClasse: Array<any> = [];
  classeDto : any={}; 
  idEtudiant!: number;
  listEtudiant: Array<any> = [];
  //listClasse: Array<Classe> = [];
  
  etudiant: Etudiant = new Etudiant();
  etudiantDto : any={};

 toasts: any[] = [];
 myFilterText!:any
 myFilterText2!:any
 
 title = 'Pagination'
 page: number = 1
 count: number = 0;
 tableSize: number = 5;
 tableSizes: any = [5, 10, 15, 20]


  constructor( private etudiantService: EtudiantService,  private router: Router,private toast: NgToastService,
     private classeService: ClasseService, public authService: AuthenticationService,private route: ActivatedRoute) { }

  ngOnInit(): void {

  this.getEtudiants();
    this.getClasses()
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

private getClasses() {

  this.classeService.getClasseList()
  .subscribe(classes => {
    this.listClasse = classes;
  });

}

 // Methode pour editer un etudiant
 updateEtudiant(idEtudiant: number){
  this.router.navigate(['dashboard/update-etudiant', idEtudiant]);
}

deleteEtudiant(idEtudiant: number){
  
  this.etudiantService.deleteEtudiant(idEtudiant).subscribe( data => {
    console.log(data);
    this.getEtudiants() 
   this.toast.success({detail:"Mesage de reussite",summary:"Etudiant supprimé avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 5000);
 
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
  }
  )
 
} 

// Methode pour editer un etudiant
noteEtudiant(idEtudiant: number){
  this.router.navigate(['dashboard/note-etudiant', idEtudiant]);
}



/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}
 
reinscription(idEtudiant: number): void{

 this.idEtudiant =idEtudiant;
  
  this.etudiant.classe = this.classeDto;
  
  this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant).subscribe(data =>{
    
     this.toast.success({detail:"Mesage de reussite",summary:"Réinscription  effectuée avec succès",duration:4000});
   },
  error => { 
   this.toast.error({detail:"Message d'erreur",summary:"Echec, réessayer encore",duration:5000});
  })
 
  }
}
