import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxButtonComponent } from './hfx-button.component';

describe('HfxButtonComponent', () => {
  let component: HfxButtonComponent;
  let fixture: ComponentFixture<HfxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
