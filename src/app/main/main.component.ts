import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movies=[];
  wiadomosc: String = "";

  constructor(private fS:FilmyService) { }

  ngOnInit(): void {
    this.fS.wszystkieFilmy().subscribe(
      (dane) => {
        this.movies = dane;
      },
      (error) => {
        this.wiadomosc = "Django offline. Wystapil blad. Sprobuj pozniej. "
        console.log(error);
      }
    );
  }

}
