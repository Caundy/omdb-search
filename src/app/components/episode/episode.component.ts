import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input() episode;
  description;
  poster = '../../../assets/128x128.png';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getEpisodeDescription(this.episode.imdbID).subscribe(
      res => {
        console.log('getting episode info');
        this.description = res['Plot'];
        this.poster = res['Poster'];
      }
    )
  }

}
