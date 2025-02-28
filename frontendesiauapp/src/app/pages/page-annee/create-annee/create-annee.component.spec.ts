import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnneeComponent } from './create-annee.component';

describe('CreateAnneeComponent', () => {
  let component: CreateAnneeComponent;
  let fixture: ComponentFixture<CreateAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
