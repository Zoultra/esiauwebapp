import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProfesseurMatiere } from 'src/app/composants/models/prof-matiere';
import { ClasseService } from 'src/app/composants/services/classe.service';
import { MatiereService } from '../../../composants/services/matiere.service';
import { ProfService } from '../../../composants/services/prof.service';

@Component({
  selector: 'app-prof-matiere',
  templateUrl: './prof-matiere.component.html',
  styleUrls: ['./prof-matiere.component.scss']
})
export class ProfMatiereComponent implements OnInit {
  
  professeurmatiere : ProfesseurMatiere = new ProfesseurMatiere()

  classeDto : any={}; 
  matiereDto : any={}; 
  profDto : any={};
  listClasse: Array<any> = [];
  matieres: Array<any> = [];
  profs: Array<any> = []; 
  matiereprofs: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  

  constructor(
    
      private classeService: ClasseService,
      private matiereService :MatiereService,
      private profService : ProfService,
      private router: Router,
      private toast: NgToastService,
      private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
  }

    this.classeService.getClasseList()
    .subscribe(classes => {
      this.listClasse = classes;
    });

// Methode pour recuperer la liste de tous les matieres

    this.matiereService.getMatiereList().subscribe(data => {
      this.matieres = data;
      console.log(data);
    });

    // Methode pour recuperer la liste de tous les profs
 
     this.profService.getProfesseurList().subscribe(data => {
     this.profs = data;
      console.log(data);
       });

    this.getMatiereProfList()

  }

  onSubmit(){
   this.saveMatiereForProf();
    }

    saveMatiereForProf(): void{
      this.professeurmatiere.classe = this.classeDto;
      this.professeurmatiere.matiere = this.matiereDto;
      this.professeurmatiere.professeur = this.profDto;

      this.profService.createMatiereProf(this.professeurmatiere).subscribe(data =>{
      console.log(data); 
      this.toast.success({detail:"Mesage de reussite",summary:"Matière enrégistrée avec succès",duration:3000});
      this.reloadPage();
       },
     error => {
       this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:3000});
       this.reloadPage();
     })
     }

     private getMatiereProfList() {
      this.profService.getAllsMatiereProf().subscribe(reponse => {
        this.matiereprofs = reponse;
        console.log(reponse);
    });
    }
    
    
    deleteMatiereProf(idProfMatiere: number){
  this.profService.deleteProfMatiereById(idProfMatiere).subscribe( data => {
    console.log(data);
    this.reloadPage();
   this.toast.success({detail:"Mesage de reussite",summary:"Ligne supprimée avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 3000);
 
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:3000});
  }
  )
 
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
