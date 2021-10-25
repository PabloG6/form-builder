import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxFormFieldComponent } from './hfx-form-field.component';

describe('HfxFormFieldComponent', () => {
  let component: HfxFormFieldComponent;
  let fixture: ComponentFixture<HfxFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
