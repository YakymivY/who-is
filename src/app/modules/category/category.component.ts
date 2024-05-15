import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  people: any = [];
  industry: string | null = '';
  displayIndustry: string | undefined = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.industry = params.get('industry');;
    });
    this.displayIndustry = this.industry?.toUpperCase();
    this.http.get('https://who-is-be.onrender.com/industry/' + this.industry).subscribe(
      (response) => {
        console.log(response);
        this.people = response;
      }
    );
  }

}
