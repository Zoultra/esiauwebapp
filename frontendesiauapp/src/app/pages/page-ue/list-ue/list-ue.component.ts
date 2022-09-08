import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UE } from 'src/app/composants/models/ue';
import { UeService } from '../../../composants/services/ue.service';

@Component({
  selector: 'app-list-ue',
  templateUrl: './list-ue.component.html',
  styleUrls: ['./list-ue.component.scss']
})
export class ListUeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  toasts: any[] = [];
  listUes: Array<any> = [];
  
  //listUes?: UE[];
  

  constructor(private toast: NgToastService, private router: Router, private ueService: UeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
    /*  language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },*/
  };
  this.getUeList();
  }

  // Methode pour recuperer la liste de tous les ues
 private getUeList() {
  this.ueService.getUeList().subscribe(data => {
    this.listUes = data;
    console.log(data);
});
}
// Methode pour editer un etudiant
updateUe(idUe: number){
  this.router.navigate(['dashboard/update-ue', idUe]);
}
//Methode pour supprimer un etudiant

deleteUe(idUe: number){
  

  this.ueService.deleteUe(idUe).subscribe( data => {
    console.log(data);
    this.getUeList() 
   this.toast.success({detail:"Mesage de reussite",summary:"UE supprimé avec succès",duration:4000});
   setTimeout(() => {
    this.reloadPage();
   }, 5000);
 
  },
  error => {
    this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
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
