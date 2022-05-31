import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MaitereService } from '../../../composants/services/maitere.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.scss']
})
export class ListMatiereComponent implements OnDestroy, OnInit {
  listMatieres: Array<any>=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private maitereService: MaitereService, private router: Router,private toast: NgToastService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    this.maitereService.getMatiereList().subscribe(data => {
      this.listMatieres = data;
      this.dtTrigger.next;
      console.log(data);
    });
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  updateMatiere(idMatiere: number){
    this.router.navigate(['update-matiere', idMatiere]);
  }

  deleteMatiere(idMatiere: number){
 
//Methode pour supprimer une matiere
this.maitereService.deleteMatiere(idMatiere).subscribe( data => {
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
  window.location.reload();
}

}
