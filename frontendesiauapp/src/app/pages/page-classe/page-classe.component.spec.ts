import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClasseComponent } from './page-classe.component';

describe('PageClasseComponent', () => {
  let component: PageClasseComponent;
  let fixture: ComponentFixture<PageClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
