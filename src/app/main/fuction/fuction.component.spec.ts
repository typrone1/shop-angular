import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuctionComponent } from './fuction.component';

describe('FuctionComponent', () => {
  let component: FuctionComponent;
  let fixture: ComponentFixture<FuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
