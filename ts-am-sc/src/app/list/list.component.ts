import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ListComponent implements OnInit {

  folders = [
    {
      "name" : "folder 1",
      "date" : "2018-01-01"
    },
    {
      "name" : "folder 2",
      "date" : "2018-02-02"
    },
    {
      "name": "folder 3",
      "date": "2018-03-20"
    },
    {
      "name": "folder 4",
      "date": "2018-04-21"
    },
    {
      "name": "folder 5",
      "date": "2018-05-30"
    }
  ];

  notes = [
    {
      "name" : "note 1",
      "date" : "2018-03-02"
    },
    {
      "name" : "note 2",
      "date" : "2018-05-10"
    },
    {
      "name": "note 3",
      "date": "2018-11-30"
    },
    {
      "name": "note 4",
      "date": "2018-12-21"
    },
    {
      "name": "note 5",
      "date": "2018-12-30"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
