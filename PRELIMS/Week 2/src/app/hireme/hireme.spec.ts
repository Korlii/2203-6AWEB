import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hireme } from './hireme';

describe('Hireme', () => {
  let component: Hireme;
  let fixture: ComponentFixture<Hireme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hireme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hireme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
