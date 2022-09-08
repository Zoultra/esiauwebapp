import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/composants/models/note';
import { MatiereService } from '../../../composants/services/matiere.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NoteService } from '../../../composants/services/note.service';
import { EtudiantService } from '../../../composants/services/etudiant.service';
import { Etudiant } from 'src/app/composants/models/etudiant';

@Component({
  selector: 'app-formulaire-saisie',
  templateUrl: './formulaire-saisie.component.html',
  styleUrls: ['./formulaire-saisie.component.scss']
})
export class FormulaireSaisieComponent implements OnInit {
  registerForm!: FormGroup
  submitted = false
  listMatieres: Array<any>=[];
  matiereDto : any = {}
  
  note : Note = new Note()
  etudiant : Etudiant = new Etudiant()
  idEtudiant!: number

  constructor(private matiereService : MatiereService,
    private formBuilder: FormBuilder, private router: Router,
    private toast: NgToastService, private noteService: NoteService,
    private route: ActivatedRoute,
    private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.matiereService.getMatiereList().subscribe(data => {
      this.listMatieres = data;
    });

    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
    
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(data => {
      this.etudiant = data;
      console.log(data);

  },error => console.log(error));

    this.registerForm = this.formBuilder.group({
      noteExamen: ['', Validators.required],
      noteDevoir: ['', Validators.required],
      matiere: ['', Validators.required],
      examen: ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }

    
     alert("Success")
     this.saveNote();
  }

  saveNote(){
    this.note.matiere = this.matiereDto
    this.note.etudiant = this.etudiant
    this.noteService.createNote(this.note).subscribe( data =>{
      console.log(data)
      this.goToNoteEtudiantList()
      this.toast.success({detail:"Mesage de reussite",summary:"Note enrégistrée avec succès",duration:5000});
    })
  }

  goToNoteEtudiantList(){
    this.router.navigate(['/dashboard/note']);
  }

}
