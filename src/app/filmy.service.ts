import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmyService = [
    {id:0, title:"Titanic", rok: 1997, opis: "Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose."},
    {id:1, title:"Terminator", rok: 1984, opis: "Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę."},
    {id:2, title:"Avatar", rok:2009, opis:"Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc."},
  ]

  constructor() { }

  wszystkieFilmy() {
    return this.filmyService;
  }
}
