import { Component, OnInit } from '@angular/core';

export interface ShowSentence {  
  id: number;
  texto: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  /*textos: any[];*/ 
  
  textos: ShowSentence[] = [];

  currentSentence: number = 1;

  constructor() {

    this.textos= [

      {id:1, texto:"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"},
      {id:2, texto:"Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."},
      {id:3, texto:"L'heroi va decidir travessar la porta que el portava a casa"},
      {id:4, texto:"Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."},

    ]

  }
  
  ngOnInit(): void {

  } 
  
  next() {
    this.currentSentence++;
    this.currentSentence > 4 ? (this.currentSentence = 1) : false;
  }
  prev() {
    this.currentSentence--;
    this.currentSentence < 1 ? (this.currentSentence = 4) : false;
  }
  
}