import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioWrapperComponent } from './radio-wrapper.component';

describe('RadioWrapperComponent', () => {
  let component: RadioWrapperComponent;
  let fixture: ComponentFixture<RadioWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
