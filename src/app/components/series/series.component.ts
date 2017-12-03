import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input() series;

  page = 1;
  episodesPerPage = 20;

  constructor() { }

  ngOnInit() {
  }

}
