import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private httpClient: HttpClient) { }

  // get API response body from GitHub profile (this should be in a service class)
  GetGitHubResponse() {
    return this.httpClient.get('https://api.github.com/users/dannyc12')
  }
}
