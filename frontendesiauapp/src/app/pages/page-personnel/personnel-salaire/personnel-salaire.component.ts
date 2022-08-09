import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Personnel } from 'src/app/composants/models/personnel';
import { Pret } from 'src/app/composants/models/pret';
import { PersonnelService } from 'src/app/composants/services/personnel.service';

@Component({
  selector: 'app-personnel-salaire',
  templateUrl: './personnel-salaire.component.html',
  styleUrls: ['./personnel-salaire.component.scss']
})
export class PersonnelSalaireComponent implements OnInit {
  personnels: Personnel[] = []
  dtOptions: DataTables.Settings = {};
  personnelDto : any={};
  
  pret : Pret = new Pret()

  constructor( private router: Router, private personnelService: PersonnelService,private toast: NgToastService) { }

  ngOnInit(): void {

    this.getPersonnelList()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
  private getPersonnelList(){
    this.personnelService.getPersonnelList().subscribe(data => {
      this.personnels = data;
      console.log(data);
    });
  }


onSubmit(){
  this.ajouterPret()
}
ajouterPret(): void{

  this.pret.personnel = this.personnelDto;
  
  this.personnelService.createPret(this.pret).subscribe(data =>{
    console.log(data) 
    this.toast.success({detail:"Mesage de reussite",summary:"Enregistrement effectué avec succès",duration:4000});
    this.reloadPage()
  }, error => { 
    this.toast.error({detail:"Message d'erreur",summary:"Enregistrement echoué, réessayer encore",duration:4000});
    console.log(this.pret.personnel)
  })

  }

  voirListPret(idPersonnel: number){
    this.router.navigate(['list-pret', idPersonnel]);
  
  }
  
/* reload*/
reloadPage(){
  window.location.reload();
} 
}
