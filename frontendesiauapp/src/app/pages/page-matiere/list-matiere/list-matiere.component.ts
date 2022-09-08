import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatiereService } from '../../../composants/services/matiere.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.scss']
})
export class ListMatiereComponent implements OnInit {
  listMatieres: Array<any>=[];
  dtOptions: DataTables.Settings = {};
   
  
  constructor(private matiereService: MatiereService, private router: Router,private toast: NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true
    };

    this.matiereService.getMatiereList().subscribe(data => {
      this.listMatieres = data;
      
      console.log(data);
    });
  }
  
   

  updateMatiere(idMatiere: number){
    this.router.navigate(['dashboard/update-matiere', idMatiere]);
  }

  deleteMatiere(idMatiere: number){
 
//Methode pour supprimer une matiere
this.matiereService.deleteMatiere(idMatiere).subscribe( data => {
  console.log(data);
 this.toast.success({detail:"Mesage de reussite",summary:"Matière supprimée avec succès",duration:2000});
 setTimeout(() => {
  this.reloadPage();
 }, 2000);

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
