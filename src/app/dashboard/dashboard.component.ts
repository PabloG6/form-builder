import { DataSource } from '@angular/cdk/table';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  $formsArray: Observable<any>;
  constructor(private _api: ApiService) { 
    this.$formsArray = this._api.getFormList();
    this._api.getFormList().subscribe((response) => {
      console.log(response);
    })

  }

  ngOnInit(): void {
  }


  onReadFile($event: any) {
    const input = $event.target;
    const fileReader: FileReader = new FileReader();
    fileReader.onload = () => {
      console.log("reader: ", fileReader.result)
      this.sendForm(fileReader.result);
    }

    
    console.log($event.target.files);

    fileReader.readAsText(input.files[0])
  }
  sendForm(result: string | ArrayBuffer) {
    let formData: string = null;
    if(result instanceof ArrayBuffer) {
      new Uint16Array(result)

      formData = String.fromCharCode.apply(null, [...new Uint16Array(result)]);
    } else {
      formData = result;
    }
    const json = JSON.parse(formData);
    this._api.submitForm(json).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }


  

}



