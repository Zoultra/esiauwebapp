import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';

@Component({
  selector: 'app-saisir-note',
  templateUrl: './saisir-note.component.html',
  styleUrls: ['./saisir-note.component.scss']
})
export class SaisirNoteComponent implements OnInit {
  listEtudiant: Array<any> = [];
  constructor(private etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
    this.getEtudiants()
  }

  // Methode pour recuperer la liste de tous les niveaux
 private getEtudiants() {
  this.etudiantService.getEtudiantList().subscribe(data => {
    this.listEtudiant = data;
});
}

saisirNote(idEtudiant: number){
  this.router.navigate(["saisie-de-note", idEtudiant])
}
  /* reload*/
  reloadPage(){
    window.location.reload();
  }
}
