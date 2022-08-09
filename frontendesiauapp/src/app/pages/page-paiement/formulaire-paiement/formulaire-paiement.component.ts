import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Etudiant } from 'src/app/composants/models/etudiant';
import { Paiement } from 'src/app/composants/models/paiement';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';
import { PaiementService } from '../../../composants/services/paiement.service';

@Component({
  selector: 'app-formulaire-paiement',
  templateUrl: './formulaire-paiement.component.html',
  styleUrls: ['./formulaire-paiement.component.scss']
})
export class FormulairePaiementComponent implements OnInit {
 
  
  paiement : Paiement = new Paiement();
  etudiant : Etudiant = new Etudiant()
  etudiant2 : Etudiant = new Etudiant()
  paiements: Array<any> = [];
  idEtudiant!: number
  

  constructor( private toast: NgToastService, 
    private paiementService : PaiementService,
    private route: ActivatedRoute,
    private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(data => {
      this.etudiant = data;
      console.log(data);

  },error => console.log(error));

  this.paiementService.getPaiementListByEtudiant(this.idEtudiant).subscribe(data => {
    this.paiements = data;
    console.log(data);

},error => console.log(error));

  }

  onSubmit(){
    this.savePaiement();
    
    }
    savePaiement(){
     // this.note.matiere = this.matiereDto
      this.paiement.etudiant = this.etudiant;
      this.paiementService.createPaiement(this.paiement).subscribe( data =>{
        console.log(data)
       
        //this.goToNoteEtudiantList()
        this.toast.success({detail:"Message de reussite",summary:"Paiement enrégistré avec succès",duration:4000});
      })
      
      //this.etudiant2.montantRestant =this.etudiant.montantRestant - this.paiement.montantPaiement;
      this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant2).subscribe(reponse =>{
        console.log(reponse);
        this.reloadPage()
      })

        }
        /* Annuler un paiement
        annulerPaiement(idPaiemant: number){
          this.paiementService.deletePaiement(idPaiemant).subscribe( data => {
            console.log(data);
           this.toast.success({detail:"Mesage de reussite",summary:"Paiement supprimé avec succès",duration:4000});
           setTimeout(() => {
            this.reloadPage();
           }, 4000);
         
          },
          error => {
            this.toast.error({detail:"Message d'erreur",summary:"Suppression echoué, réessayer encore",duration:5000});
          }
          )

       
       this.etudiant2.montantRestant =this.etudiant.montantRestant + this.paiement.montantPaiement;
      this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiant2).subscribe(reponse =>{
        console.log(reponse);
        this.reloadPage()
      })
        }*/

        /* reload*/
reloadPage(){
  window.location.reload();
}

}
