import { Component, OnInit } from '@angular/core';
import { Niveau } from 'src/app/composants/models/niveau';
import { NiveauService } from 'src/app/composants/services/niveau.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

  
declare var window:any;

@Component({
  selector: 'app-page-niveau',
  templateUrl: './page-niveau.component.html',
  styleUrls: ['./page-niveau.component.scss']
})
export class PageNiveauComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  formModal:any;
  idNiveau!: number;
  modalTitle!: String;
  toasts: any[] = [];
  niveaux!: Niveau[];
  niveau: Niveau = new Niveau();
  exform:any;

  
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private niveauService: NiveauService,
    private router: Router,  private route: ActivatedRoute,private toast: NgToastService) { }

    // Le ngOninit s'execute lorsqu'on ouvre la page niveau et declenche les methodes qui sont à l'interieur

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
     /* language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },*/
  }
   this.getNiveaux()
    
    
 

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    ); 

    

    this.exform = new FormGroup({
      "nomNiveau": new FormControl(null,Validators.required)
    });

    this.idNiveau = this.route.snapshot.params['idNiveau'];
    
    if(['idNiveau']){
    this.niveauService.getNiveauById(this.idNiveau).subscribe(data => {
      this.niveau = data;
      this.openModal();
      this.modalTitle= "Modification";
    }, error => console.log(error));
  }
  if(['']){
    this.modalTitle= "Enregistrement de niveau";
   }
   
 
  }
  get nomNiveau() { return this.exform.get('nomNiveau'); }

  openModal(){
    this.formModal.show();
  }

 /* openModalForUpdateNiveau(idNiveau: number){
 
    this.router.navigate(['niveau', idNiveau])
    this.formModal.show();
  }*/

  // Methode pour declencher le processus de modification de niveau

  updateNiveau(idNiveau: number){
    this.router.navigate(['dashboard/niveau', idNiveau]);
  }


  closeModal(){
    this.router.navigate(['/niveau']).then(() => {
      window.location.reload();
    });;
  }

  // Methode pour recuperer la liste de tous les niveaux
  private getNiveaux() {
    this.niveauService.getNiveauList().subscribe(data => {
      this.niveaux = data;
  });
}

onTableDataChange(event: any){
  this.page = event;
  this.getNiveaux()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getNiveaux()
}

// Methode pour enregistrer un niveau
saveNiveau(){
  this.niveauService.createNiveau(this.niveau).subscribe(data =>{
      
      console.log(data);
      this.toast.success({detail:"Mesage de reussite",summary:"Niveau enrégistrer avec succès",duration:5000});
      
     
    },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:5000});
  })
  
} 
 // Methode pour supprimer un niveau

deleteNiveau(idNiveau: number){
  this.niveauService.deleteNiveau(idNiveau).subscribe( data => {
    console.log(data);
    this.getNiveaux() 
   this.toast.success({detail:"Mesage de reussite",summary:"Niveau supprimé avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 5000);
 
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
  }
  )
 
} 


  
// Methode pour appeller la methode saveNiveau pour l'ajout de niveau
 
onSubmit(){
 
  console.log(this.niveau);
  this.saveNiveau();
  this.reloadPage();
}


/* reload*/
reloadPage(){
  
  this.router.routeReuseStrategy.shouldReuseRoute= () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['./niveau'], {
    relativeTo: this.route
  })
 
}



}
