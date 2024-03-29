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

  
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private profService: ProfService, private router: Router, private toast:NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProfList()
  }

   // Methode pour recuperer la liste de tous les profs
 private getProfList() {
  this.profService.getProfesseurList().subscribe(data => {
    this.profs = data;
    console.log(data);
});
}
onTableDataChange(event: any){
  this.page = event;
  this.getProfList()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getProfList()
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
