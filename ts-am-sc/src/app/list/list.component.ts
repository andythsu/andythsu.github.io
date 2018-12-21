import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
