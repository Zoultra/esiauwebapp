import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  dtOptions: DataTables.Settings = {};
  
  constructor(private etudiantService: EtudiantService,private classeService: ClasseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
    };
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
  this.router.navigate(["dashboard/saisie-de-note", idEtudiant])
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
