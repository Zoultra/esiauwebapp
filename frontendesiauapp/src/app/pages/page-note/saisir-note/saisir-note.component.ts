import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/composants/services/classe.service';
import { EtudiantService } from 'src/app/composants/services/etudiant.service';

@Component({
  selector: 'app-saisir-note',
  templateUrl: './saisir-note.component.html',
  styleUrls: ['./saisir-note.component.scss']
})
export class SaisirNoteComponent implements OnInit {
  listEtudiant: Array<any> = [];
  listClasse: Array<any> = [];
  myFilterText!:any
  
  constructor(private etudiantService: EtudiantService,private classeService: ClasseService, private router: Router) { }

  ngOnInit(): void {
    this.getEtudiants()
    this.classeService.getClasseList()
  .subscribe(classes => {
    this.listClasse = classes;
  });
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
