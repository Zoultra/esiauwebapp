import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from 'src/app/composants/services/personnel.service';
import { Personnel } from '../../../composants/models/personnel';

@Component({
  selector: 'app-list-pret',
  templateUrl: './list-pret.component.html',
  styleUrls: ['./list-pret.component.scss']
})
export class ListPretComponent implements OnInit {
  prets: Array<any> = [];
  personnels: Array<any> = [];
  idPret!: number
  totalPret!:number
  idPersonnel!: number
  personnel : Personnel = new Personnel()
  myFilterText!:any
  dtOptions: DataTables.Settings = {};
  mois!: string
  
  constructor(private personnelService: PersonnelService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
      stateSave: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },
  }
  
    this.idPersonnel = this.route.snapshot.params['idPersonnel'];
     
   
    this.personnelService.getPersonnelById(this.idPersonnel).subscribe(data => {
      this.personnel = data;
      console.log(data);

  },error => console.log(error));

  this.personnelService.getListPretByIdPersonnel(this.idPersonnel).subscribe(data => {
    this.prets = data;
     this.totalPret = 0;
    for(let i=0; i<=this.prets.length; i++){

      this.totalPret = this.prets[i].montantPret+this.totalPret;
    }
    console.log(data);

},error => console.log(error));
  }
  /*
  findByMois(mois : string){
    this.router.navigate(['list-pret',mois]);
    console.log(this.idPersonnel,mois)
  }*/

  annulerPret(idPret: number){}

  

}
