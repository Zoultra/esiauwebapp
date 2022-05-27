import { Component, OnInit } from '@angular/core';
import { Niveau } from '../../../../composants/models/niveau';
import { NiveauService } from 'src/app/composants/services/niveau.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-niveau',
  templateUrl: './update-niveau.component.html',
  styleUrls: ['./update-niveau.component.scss']
})
export class UpdateNiveauComponent implements OnInit {
 
  idNiveau!: number;
  niveau: Niveau = new Niveau();

  constructor(private niveauService: NiveauService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idNiveau = this.route.snapshot.params['idNiveau'];

    this.niveauService.getNiveauById(this.idNiveau).subscribe(data => {
      this.niveau = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.niveauService.updateNiveau(this.idNiveau, this.niveau).subscribe( data =>{
      this.goToNiveauList();
    }
    , error => console.log(error));
  }

  goToNiveauList(){
    this.router.navigate(['/niveau']);
  }

}
