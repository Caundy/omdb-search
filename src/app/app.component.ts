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

  // switches needed for the query to operate corectly
  result;
  isSeries = false;
  notFound = false;

  handleSubmit (formValue) {
    this.resetValues();
    let query = formValue.query;
    console.log(query);
    this.handleRequest(query);
  }

  resetValues () {
    this.isSeries = false;
    this.notFound = false;
    this.result = null;
  }

  handleRequest (query) {
    let queryUrl = this.dataService.createRequest(query);
    this.dataService.sendRequest(queryUrl).subscribe(
      res => {
        if (res['Response']!=="False") {
          // set result to what we got back
          this.result = res;
          // if it's a series get all the seasons and episodes
          if (res['totalSeasons']) {
            this.isSeries = true;
            this.result = this.dataService.getSeasons(query, res['totalSeasons']);
          }
        } else {
          this.notFound = true;
        }
      }
    )}

}
