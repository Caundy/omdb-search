import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(
        private http: HttpClient
    ) { }

    secretKey = '&apikey=4b5fff88';
    apiUrl = 'http://www.omdbapi.com/?t=';

    createRequest (query, season = null) {
        let requestUrl = '';
        for (let word of query.split(' ')) {
            requestUrl += `${word}%20`
        }
        // slice the last %20
        requestUrl = requestUrl.slice(0, requestUrl.length-3);
        console.log(this.apiUrl + requestUrl + this.secretKey);
        if (season) {
            requestUrl += `&season=${season}`;
        }
        return this.apiUrl + requestUrl + this.secretKey;
    }

    sendRequest (query) {
        return this.http.get(query);
    }

    getSeasons (query, seasons) {
        let result = [];
        for (let i = 1; i <= seasons; i++) {
            this.sendRequest(this.createRequest(query, i)).subscribe(
                res => result.push(res)
            );
        }
        return result;
    }

}
