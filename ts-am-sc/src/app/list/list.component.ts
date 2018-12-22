import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  bucketlist = [
    {
      "name": "Hamilton",
      "date": "2019-01-04",
      "datetime": "2019-01-04T12:00:00",
      "done": false
    },
    {
      "name" : "Ski",
      "date" : "2019-01-18",
      "datetime": "2019-01-18T08:00:00",
      "done": false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
