import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  variables: any;

  constructor(private httpClient: HttpClient) {
    this.variables = this.httpClient.get('https://raw.githubusercontent.com/pgalroddaw2/responsive/master/src/app/home/MOCK_DATA.json');
  }

}
