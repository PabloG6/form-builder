import { Clipboard } from '@angular/cdk/clipboard';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  @Input() form: any;
  webhookControl: FormControl = new FormControl();
  constructor(private _api: ApiService,  @Inject(DOCUMENT) private document: Document, private clipboard: Clipboard, private _router: Router) {
   }
  

  ngOnInit(): void {
    this.webhookControl.setValue(this.form.url)

  }


  previewForm() {
    this._router.navigate(['..', 'form', this.form.id]);
  }

  updateWebhookUrl() {
    this._api.updateForm({id: this.form.id, url: this.webhookControl.value}).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }

  copyWebhookUrl() {
    this.clipboard.copy(this.webhookControl.value);
  }
}
