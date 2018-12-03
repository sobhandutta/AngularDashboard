import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss/styles.scss']
})
export class LicenseComponent implements OnInit {

  processes = [
    {process: 'ZooKeeper', status: 'active', expireOn: '2/28/2019'},
    {process: 'Kafka', status: 'active', expireOn: '2/28/2019'},
    {process: 'Storm', status: 'active', expireOn: '2/28/2019'},
    {process: 'Tableau', status: 'active', expireOn: '2/28/2019'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
