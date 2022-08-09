import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';
import { PaiementService } from 'src/app/composants/services/paiement.service';

@Component({
  selector: 'app-situation-paiement',
  templateUrl: './situation-paiement.component.html',
  styleUrls: ['./situation-paiement.component.scss']
})
export class SituationPaiementComponent implements OnInit {
  paiements: Array<any> = [];
  listEtudiant: Array<any> = [];
  idEtudiant!: number
  totalPaiement!:number
  constructor(private paiementService : PaiementService,private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    
    this.getEtudiants()
  }
 
 // Methode pour recuperer la liste de tous les niveaux
 private getEtudiants() {
  this.totalPaiement = 0;
  this.etudiantService.getEtudiantList().subscribe(data => {
    this.listEtudiant = data;
    
    for(let i=0; i<=this.listEtudiant.length; i++){

      this.idEtudiant = this.listEtudiant[i].idEtudiant;
      console.log(this.idEtudiant)

       
this.paiementService.getPaiementListByEtudiant(this.idEtudiant).subscribe(reponse => {
  this.paiements = reponse;
 
for(let p=0; p<=this.paiements.length; p++){

  this.totalPaiement = this.paiements[p].montantPaiement+this.totalPaiement;
  console.log(this.totalPaiement)
}
})

    }
});

}
  

  
/* reload*/
reloadPage(){
  
  window.location.reload();
}

}
