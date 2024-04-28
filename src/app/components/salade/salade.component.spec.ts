import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladeComponent } from './salade.component';

describe('SaladeComponent', () => {
  let component: SaladeComponent;
  let fixture: ComponentFixture<SaladeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladeComponent]
    });
    fixture = TestBed.createComponent(SaladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
