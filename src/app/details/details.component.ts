import { Component, OnInit } from '@angular/core';
import {FilmyService} from '../filmy.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Subscriber } from 'rxjs';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie;
  baseUrl: String = environment.apiURL;
  

  constructor( private route:ActivatedRoute,
    private fS:FilmyService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.fS.getFilm(Number(id)).subscribe(
      (dane) => {
        this.movie = dane;
      },
      (error) => {
        console.log(error);
  }
    )
}
    cofnij() {
      this.location.back();
    }

  

}
