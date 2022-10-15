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
  myFilterText2!:any
 
  title = 'Pagination'
  page: number = 1
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20]
   
  
  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
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

  
onTableDataChange(event: any){
  this.page = event;
  this.getNoteEtudiant()
}

onTableSizeChange(event: any){
  this.tableSize = event.target.value;
  this.page = 1;
  this.getNoteEtudiant()
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
