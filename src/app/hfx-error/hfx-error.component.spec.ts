import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxErrorComponent } from './hfx-error.component';

describe('HfxErrorComponent', () => {
  let component: HfxErrorComponent;
  let fixture: ComponentFixture<HfxErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
