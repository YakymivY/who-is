import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MainComponent implements OnInit {

  politics: any = [];
  business: any = [];
  media: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://who-is-be.onrender.com/industry/politics').subscribe(
      (response) => {
        console.log(response);
        this.politics = response;
      }
    );
    this.http.get('https://who-is-be.onrender.com/industry/business').subscribe(
      (response) => {
        console.log(response);
        this.business = response;
      }
    );
    this.http.get('https://who-is-be.onrender.com/industry/media').subscribe(
      (response) => {
        console.log(response);
        this.media = response;
      }
    );
  }
}
