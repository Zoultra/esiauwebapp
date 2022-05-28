import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUeComponent } from './list-ue.component';

describe('ListUeComponent', () => {
  let component: ListUeComponent;
  let fixture: ComponentFixture<ListUeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
