import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VServiciosComponent } from './v-servicios.component';

describe('VServiciosComponent', () => {
  let component: VServiciosComponent;
  let fixture: ComponentFixture<VServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VServiciosComponent]
    });
    fixture = TestBed.createComponent(VServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
