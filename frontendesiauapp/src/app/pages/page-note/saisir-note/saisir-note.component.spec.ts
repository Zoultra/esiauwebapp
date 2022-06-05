import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirNoteComponent } from './saisir-note.component';

describe('SaisirNoteComponent', () => {
  let component: SaisirNoteComponent;
  let fixture: ComponentFixture<SaisirNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
