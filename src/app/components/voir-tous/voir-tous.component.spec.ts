import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirTousComponent } from './voir-tous.component';

describe('VoirTousComponent', () => {
  let component: VoirTousComponent;
  let fixture: ComponentFixture<VoirTousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoirTousComponent]
    });
    fixture = TestBed.createComponent(VoirTousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
