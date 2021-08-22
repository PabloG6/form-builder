import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

   formGroup: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.formGroup = _fb.group({
      title: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

}
