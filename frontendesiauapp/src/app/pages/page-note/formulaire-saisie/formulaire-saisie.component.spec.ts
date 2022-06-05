import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSaisieComponent } from './formulaire-saisie.component';

describe('FormulaireSaisieComponent', () => {
  let component: FormulaireSaisieComponent;
  let fixture: ComponentFixture<FormulaireSaisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireSaisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
