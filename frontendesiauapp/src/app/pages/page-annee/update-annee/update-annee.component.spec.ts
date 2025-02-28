import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnneeComponent } from './update-annee.component';

describe('UpdateAnneeComponent', () => {
  let component: UpdateAnneeComponent;
  let fixture: ComponentFixture<UpdateAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
