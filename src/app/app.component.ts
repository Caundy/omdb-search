import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  constructor (
    private dataService: DataService
  ) { }

  result;
  isSeries = false;

  handleSubmit (formValue) {
    this.isSeries = false;
    let query = formValue.query;
    console.log(query);
    let queryUrl = this.dataService.createRequest(query);
    this.dataService.sendRequest(queryUrl).subscribe(
      res => {
        console.log(res);
        this.result = res;
        // if it's a series
        if (res['totalSeasons']) {
          this.isSeries = true;
          this.result = this.dataService.getSeasons(query, res['totalSeasons']);
        }
      }
    );
  }

}
