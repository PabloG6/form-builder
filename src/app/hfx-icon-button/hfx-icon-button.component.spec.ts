import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxIconButtonComponent } from './hfx-icon-button.component';

describe('HfxIconButtonComponent', () => {
  let component: HfxIconButtonComponent;
  let fixture: ComponentFixture<HfxIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
