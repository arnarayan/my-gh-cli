import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfToolsComponent } from './list-of-tools.component';

describe('ListOfToolsComponent', () => {
  let component: ListOfToolsComponent;
  let fixture: ComponentFixture<ListOfToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
