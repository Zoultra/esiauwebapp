import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { Paiement } from 'src/app/composants/models/paiement';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';
import { PaiementService } from 'src/app/composants/services/paiement.service';

@Component({
  selector: 'app-list-paiement',
  templateUrl: './list-paiement.component.html',
  styleUrls: ['./list-paiement.component.scss']
})
export class ListPaiementComponent implements OnInit {
  paiements: Array<any> = [];
  etudiant : Etudiant = new Etudiant()
  UppaiementUp : any={}
  idEtudiant!: number
  idPaiement!: number
  totalPaiement!:number
  totalPaiement2!:number
  nombreP!:number
  toasts: any[] = [];

  constructor(private toast: NgToastService, 
    private paiementService : PaiementService,
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
   
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(data => {
      this.etudiant = data;
      console.log(data);

  },error => console.log(error));

  this.paiementService.getPaiementListByEtudiant(this.idEtudiant).subscribe(data => {
    this.paiements = data;
     this.totalPaiement = 0;
    for(let i=0; i<=this.paiements.length; i++){

      this.totalPaiement = this.paiements[i].montantPaiement+this.totalPaiement;
    }
    console.log(data);

},error => console.log(error));

  }

  annulerPaiement(idPaiement: number){

          // Suppression

    this.paiementService.deletePaiement(idPaiement).subscribe( data => {
      console.log(data);
     this.reloadPage()
     this.toast.success({detail:"Mesage de reussite",summary:"Paiement annulé avec succès",duration:4000});
     setTimeout(() => {
     // this.reloadPage();
     }, 4000);
   
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
