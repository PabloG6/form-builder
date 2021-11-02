import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  @Input() form: any;
  webhookControl: FormControl = new FormControl();
  constructor(private _api: ApiService) {
   }
  

  ngOnInit(): void {
    this.webhookControl.setValue(this.form.url)

  }


  updateWebhookUrl() {
    this._api.updateForm({id: this.form.id, url: this.webhookControl.value}).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
  }
}
