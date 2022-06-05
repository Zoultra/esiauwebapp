import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfComponent } from './list-prof.component';

describe('ListProfComponent', () => {
  let component: ListProfComponent;
  let fixture: ComponentFixture<ListProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
