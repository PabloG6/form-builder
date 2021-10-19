import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxIconComponent } from './hfx-icon.component';

describe('HfxIconComponent', () => {
  let component: HfxIconComponent;
  let fixture: ComponentFixture<HfxIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
