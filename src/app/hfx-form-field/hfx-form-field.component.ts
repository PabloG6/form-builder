import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, HostBinding, HostListener, InjectionToken, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { scheduled, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { hfxFormFieldAnimations } from './hfx-form-field-animations';
import { FORM_FIELD_TOKEN, HfxFormFieldControl } from './hfx-form-field-control';
import { HfxInputDirective } from './hfx-input.directive';

export const FORM_CONTAINER = new InjectionToken<HfxFormFieldComponent>("FORM_CONTAINER")

@Component({
  selector: 'hfx-form-field',
  templateUrl: './hfx-form-field.component.html',
  styleUrls: ['./hfx-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    
    'class': 'hfx-form-field',
    '[class.hfx-form-field--active]': '!_control.errorState && _control.focused',
    '[class.hfx-form-field--invalid]': '_control.errorState',
    '[class.hfx-form-field--focused]': '_control.focused',
   
  },
  animations: [hfxFormFieldAnimations.transitionMessages],
  providers: [{provide: FORM_CONTAINER, useExisting: HfxFormFieldComponent}]

})
export class HfxFormFieldComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{
  

  @Input() label: string;

  @ContentChild(FORM_FIELD_TOKEN, {static: true}) formFieldControl: HfxFormFieldControl<any>;
   
  private _destroyed: Subject<void> = new Subject<void>();
  get _control(): HfxFormFieldControl<any> {
    return this.formFieldControl
  }
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }
  
  ngAfterContentChecked(): void {
  }
  ngAfterContentInit(): void {
    console.log("hello world", this.formFieldControl);
    this._control.stateChanges.pipe(startWith(), takeUntil(this._destroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    })
  }
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this._destroyed.next();
  }

 
  


  
}
