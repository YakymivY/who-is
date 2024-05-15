import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personality',
  standalone: true,
  imports: [],
  templateUrl: './personality.component.html',
  styleUrl: './personality.component.css'
})

export class PersonalityComponent implements OnInit {

  person: any = {};
  connections: any = [];
  events: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let personId;
    this.route.paramMap.subscribe(params => {
      personId = params.get('id');
    });
    this.http.get('https://who-is-be.onrender.com/person/' + personId).subscribe(
      (response) => {
        console.log(response);
        this.person = response;
      }
    );
    this.http.get('https://who-is-be.onrender.com/person/' + personId + '/connections').subscribe(
      (response) => {
        console.log(response);
        this.connections = response;
      }
    );
    this.http.get('https://who-is-be.onrender.com/person/' + personId + '/events').subscribe(
      (response) => {
        console.log(response);
        this.events = response;
      }
    );
  }

}
