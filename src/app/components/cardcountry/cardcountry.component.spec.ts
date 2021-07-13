import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcountryComponent } from './cardcountry.component';

describe('CardcountryComponent', () => {
  let component: CardcountryComponent;
  let fixture: ComponentFixture<CardcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
