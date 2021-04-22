import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  results: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.results = [
      { id: 11, name: 'Dr Nice', type: 'PCR', result: 'positive' },
      { id: 12, name: 'Narco', type: 'Antigen', result: 'negative' },
      { id: 13, name: 'Bombasto', type: 'Antibody', result: 'positive' },
      { id: 14, name: 'Celeritas', type: 'PCR', result: 'positive' },
      { id: 15, name: 'Magneta', type: 'PCR', result: 'invalid' },
      { id: 16, name: 'RubberMan', type: 'Antigen', result: 'negative' }
    ];
  }

}
