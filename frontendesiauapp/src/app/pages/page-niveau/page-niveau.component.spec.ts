import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNiveauComponent } from './page-niveau.component';

describe('PageNiveauComponent', () => {
  let component: PageNiveauComponent;
  let fixture: ComponentFixture<PageNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
