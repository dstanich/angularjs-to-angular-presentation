import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedValueComponent } from './calculated-value.component';

describe('CalculatedValueComponent', () => {
  let component: CalculatedValueComponent;
  let fixture: ComponentFixture<CalculatedValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatedValueComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
