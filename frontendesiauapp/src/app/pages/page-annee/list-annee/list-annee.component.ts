import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AnneeService } from '../../../composants/services/annee.service';

@Component({
  selector: 'app-list-annee',
  templateUrl: './list-annee.component.html',
  styleUrls: ['./list-annee.component.scss']
})
export class ListAnneeComponent implements OnInit {
    
  annees: Array<any>=[];
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
  
  constructor(private anneeService: AnneeService, private router: Router,private toast: NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnneeList()
  }

  activeAnnee(idAnnee: number){
    this.router.navigate(['dashboard/gestion-annee/update-annee', idAnnee]);
  }
  
  deleteAnnee(idAnnee: number){
 
    //Methode pour supprimer une matiere
    this.anneeService.deleteAnnee(idAnnee).subscribe( data => {
      console.log(data);
     this.toast.success({detail:"Mesage de reussite",summary:"Année supprimée avec succès",duration:2000});
     setTimeout(() => {
      this.reloadPage();
     }, 2000);
    
    },
    error => {
      this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
    }
    )
    
      }

   
  private getAnneeList(){
    this.anneeService.getAnneeList().subscribe(data => {
      this.annees = data;
      console.log(data);
    });
  }

   
  onTableDataChange(event: any){
    this.page = event;
    this.getAnneeList()
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAnneeList()
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
