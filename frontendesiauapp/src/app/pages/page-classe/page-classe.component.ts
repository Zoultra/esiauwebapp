import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Classe } from 'src/app/composants/models/classe';
import { Niveau } from 'src/app/composants/models/niveau';
import { ClasseService } from '../../composants/services/classe.service';
import { NiveauService } from '../../composants/services/niveau.service';
import { Etudiant } from '../../composants/models/etudiant';

declare var window:any;

@Component({
  selector: 'app-page-classe',
  templateUrl: './page-classe.component.html',
  styleUrls: ['./page-classe.component.scss']
})
export class PageClasseComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  formModal:any;
  modalTitle!: string;
  toasts: any[] = [];
  exform:any;
  idClasse!: number;  
  classe: Classe = new Classe();
  errorMsg: Array<string> = [];
  listClasse: Array<any> = [];
  listNiv: Array<Niveau> = [];
  numero!:number
  niveauDto : any={};
  
  
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]

  constructor(
    private classeService: ClasseService,
    private niveauService: NiveauService,
    private router: Router,  private route: ActivatedRoute,
    private toast: NgToastService) { }


  ngOnInit(): void { 
    
  
this.getclasses();
  this.formModal = new window.bootstrap.Modal(
    document.getElementById('exampleModal')
  ); 

  

  this.exform = new FormGroup({
    "nomClasse": new FormControl(null,Validators.required)
  });

  this.idClasse = this.route.snapshot.params['idClasse'];
  if(['idClasse']){
  this.classeService.getClasseById(this.idClasse).subscribe(data => {
    this.classe = data;
    this.openModal();
    this.modalTitle= "Modification";
     
  
  }, error => console.log(error));
}if(['']){
  this.modalTitle= "Enregistrement de classe";
 }
 
 this.niveauService.getNiveauList()
 .subscribe(niveaux => {
   this.listNiv = niveaux;
 });

 

}


get nomClasse() { return this.exform.get('nomClasse'); }

openModal(){
  this.formModal.show();
}


/* openModalForUpdateNiveau(idNiveau: number){

  this.router.navigate(['niveau', idNiveau])
  this.formModal.show();
}*/

// Methode pour declencher le processus de modification de classe

updateClasse(idClasse: number){
  this.router.navigate(['/dashboard/classe', idClasse]);
}


closeModal(){
  this.router.navigate(['/dashboard/classe']) .then(() => {
    this.reloadPage()
  });
}

// Methode pour recuperer la liste de tous les classes
private getclasses() {
  this.classeService.getClasseList().subscribe(data => {
    this.listClasse = data;
     
      
      for( this.numero=1; this.numero<=data.length; this.numero++){
           

           console.log(this.numero);
           
      }
     
});
}

onTableDataChange(event: any){
  this.page = event;
  this.getclasses()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getclasses()
}

// Methode pour enregistrer un classe
saveClasse(): void{
  
 this.classe.niveau = this.niveauDto;
 
 this.classeService.createClasse(this.classe).subscribe(data =>{
    
    console.log(data);
    this.toast.success({detail:"Mesage de reussite",summary:"Classe enrégistrée avec succès",duration:5000});
    
   
  },
error => {
  this.errorMsg = error.error.errors
  ;
  
  //this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
})

} 
// Methode pour supprimer un classe

deleteClasse(idClasse: number){
this.classeService.deleteClasse(idClasse).subscribe( data => {
  console.log(data);
  this.getclasses() 
 this.toast.success({detail:"Mesage de reussite",summary:"Classe supprimé avec succès",duration:4000});
 setTimeout(() => {
  this.reloadPage();
 }, 5000);

},
error => {
  this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
}
)

} 



// Methode pour appeller la methode saveclasse pour l'ajout de classe

onSubmit(){
this.saveClasse();
console.log(this.classe);
}



/* reload*/
reloadPage(){
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./'], {
    relativeTo: this.route
  })
}
// boucle
  

}
