import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomForms } from './custom-forms';

describe('CustomForms', () => {
  let component: CustomForms;
  let fixture: ComponentFixture<CustomForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
