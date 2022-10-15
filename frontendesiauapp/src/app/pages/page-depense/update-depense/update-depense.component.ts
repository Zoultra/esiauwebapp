import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Depense } from 'src/app/composants/models/depense';
import { DepenseService } from 'src/app/composants/services/depense.service';

@Component({
  selector: 'app-update-depense',
  templateUrl: './update-depense.component.html',
  styleUrls: ['./update-depense.component.scss']
})
export class UpdateDepenseComponent implements OnInit {
       
  idDepense!: number

  depense : Depense = new Depense()

  errorMsg: Array<string> = [];

  constructor( private route: ActivatedRoute,private depenseService: DepenseService,
    private router : Router, private toast: NgToastService) { }

  ngOnInit(): void {

    this.idDepense = this.route.snapshot.params['idDepense'];
    
    this.depenseService.getDepenseById(this.idDepense).subscribe(data => {
      this.depense = data;
      console.log(data);
  },error => console.log(error));

  }

   
onSubmit(){
  this.updateDepense(); 
  }

  //Methode pour enregistrer un etudiant
  updateDepense(): void{
  this.depenseService.updateDepense(this.idDepense, this.depense).subscribe(data =>{
    this.goToDepenseList();
     this.toast.success({detail:"Message de reussite",summary:"Dépense modifiée avec succès",duration:4000});
   },
  error => {
   this.errorMsg = error.error.errors
   this.toast.error({detail:"Message d'erreur",summary:"Modification echoué, réessayer encore",duration:4000});
  })
  }
  goToDepenseList(){
    this.router.navigate(['/gestion-depense/list-depense']);
  }

}
