import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movies=[];

  constructor(private fS:FilmyService) { }

  ngOnInit(): void {
    this.movies = this.fS.wszystkieFilmy();
  }

}
