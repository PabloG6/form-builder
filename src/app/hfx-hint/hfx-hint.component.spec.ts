import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfxHintComponent } from './hfx-hint.component';

describe('HfxHintComponent', () => {
  let component: HfxHintComponent;
  let fixture: ComponentFixture<HfxHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfxHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HfxHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
