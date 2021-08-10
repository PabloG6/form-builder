import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputWrapperComponent } from './mat-input-wrapper.component';

describe('MatInputWrapperComponent', () => {
  let component: MatInputWrapperComponent;
  let fixture: ComponentFixture<MatInputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatInputWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
