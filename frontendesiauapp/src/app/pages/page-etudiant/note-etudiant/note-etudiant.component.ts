import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../composants/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../composants/models/note';

@Component({
  selector: 'app-note-etudiant',
  templateUrl: './note-etudiant.component.html',
  styleUrls: ['./note-etudiant.component.scss']
})
export class NoteEtudiantComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  notes: Array<any> = [];
  idEtudiant!:number
  myFilterText!:any
   
  
  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu : [5, 10, 25, 100],
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/fr-FR.json'
      },
  }
   this.getNoteEtudiant();

  /*
  this.noteService.getNoteListByEtudiant()
  .subscribe(notes => {
    this.notes = notes;
  });*/

  }
  
  private getNoteEtudiant(){

    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
    this.noteService.getNoteListByEtudiant(this.idEtudiant).subscribe(data => {
    this.notes = data;
    console.log(data);

},error => console.log(error));
        
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
