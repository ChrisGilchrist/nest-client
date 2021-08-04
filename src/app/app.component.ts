import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CatDto } from './entities/catDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  cats: Array<CatDto> = [];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:3000/cats').subscribe((cats: Array<CatDto>) => {
      this.cats = cats;
    });

  }
}
