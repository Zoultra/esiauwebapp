import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationPaiementComponent } from './situation-paiement.component';

describe('SituationPaiementComponent', () => {
  let component: SituationPaiementComponent;
  let fixture: ComponentFixture<SituationPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationPaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
