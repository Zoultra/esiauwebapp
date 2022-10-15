import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DepenseService } from 'src/app/composants/services/depense.service';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.scss']
})
export class ListDepenseComponent implements OnInit {
   
  depenses: Array<any>=[];
  myFilterText!:any
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private depenseService: DepenseService, private router: Router,private toast: NgToastService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepenseList()
  }

  private getDepenseList(){
    this.depenseService.getDepenseList().subscribe(data => {
      this.depenses = data;
     console.log(data);
    });
  }
   
  onTableDataChange(event: any){
    this.page = event;
    this.getDepenseList()
  }

  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getDepenseList()
  }
  updateDepense(idDepense: number){
    this.router.navigate(['dashboard/gestion-depense/update-depense', idDepense]);
  }

  deleteDepense(idDepense: number){
 
     
    this.depenseService.deleteDepense(idDepense).subscribe( data => {
      console.log(data);
     this.toast.success({detail:"Mesage de reussite",summary:"Dépense supprimée avec succès",duration:2000});
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
