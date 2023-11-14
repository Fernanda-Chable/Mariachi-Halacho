import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepertorioComponent } from './repertorio.component';

describe('RepertorioComponent', () => {
  let component: RepertorioComponent;
  let fixture: ComponentFixture<RepertorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepertorioComponent]
    });
    fixture = TestBed.createComponent(RepertorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
