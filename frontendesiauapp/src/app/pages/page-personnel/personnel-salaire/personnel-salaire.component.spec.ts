import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelSalaireComponent } from './personnel-salaire.component';

describe('PersonnelSalaireComponent', () => {
  let component: PersonnelSalaireComponent;
  let fixture: ComponentFixture<PersonnelSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelSalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
