import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Depense } from 'src/app/composants/models/depense';
import { DepenseService } from 'src/app/composants/services/depense.service';

@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrls: ['./create-depense.component.scss']
})
export class CreateDepenseComponent implements OnInit {
   
  depense : Depense = new Depense()
  today = new Date();

  constructor(private depenseService: DepenseService,private router : Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveDepense();
  }

  saveDepense(){
   this.depense.dateDepense = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    this.depenseService.createDepense(this.depense).subscribe( data =>{
      console.log(data)
      this.goToDepenseList()
      this.toast.success({detail:"Mesage de reussite",summary:"Dépense enrégistrée avec succès",duration:4000});
     // console.log(this.today.toString());
    })
  }
  goToDepenseList(){
    this.router.navigate(['/dashboard/gestion-depense/list-depense']);
  }

}
