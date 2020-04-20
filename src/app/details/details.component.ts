import { Component, OnInit } from '@angular/core';
import {FilmyService} from '../filmy.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie;
  
  

  constructor( private route:ActivatedRoute,
    private fS:FilmyService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.movie = this.fS.getFilm(Number(id));
  }
  
    cofnij() {
      this.location.back();
    }

  

}
