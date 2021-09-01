import { DataSource } from '@angular/cdk/table';
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

  

}



