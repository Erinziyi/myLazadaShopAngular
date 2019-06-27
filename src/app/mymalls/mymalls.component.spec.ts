import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymallsComponent } from './mymalls.component';

describe('MymallsComponent', () => {
  let component: MymallsComponent;
  let fixture: ComponentFixture<MymallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
