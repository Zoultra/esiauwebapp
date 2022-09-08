import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/composants/services/prof.service';
import { Professeur } from '../../../composants/models/prof';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-prof',
  templateUrl: './list-prof.component.html',
  styleUrls: ['./list-prof.component.scss']
})
export class ListProfComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  profs: Array<any> = [];

  constructor(private profService: ProfService, private router: Router, private toast:NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfList()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
     /* language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },*/
  }
  }

   // Methode pour recuperer la liste de tous les profs
 private getProfList() {
  this.profService.getProfesseurList().subscribe(data => {
    this.profs = data;
    console.log(data);
});
}
// Methode pour la modif

updateProf(idProf: number){
  this.router.navigate(['dashboard/update-prof', idProf]);
}

//Methode pour supprimer un prof
deleteProf(idProf: number){
  

  this.profService.deleteProfesseur(idProf).subscribe( data => {
    console.log(data);
    this.getProfList() 
   this.toast.success({detail:"Mesage de reussite",summary:"Professeur supprimé avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 5000);
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, des matières sont affectées au professeur",duration:5000});
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
