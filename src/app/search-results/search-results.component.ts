import { Component, Input } from '@angular/core';
import { Character } from '../models/character-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input()
  characters: Character[];
  @Input()
  currentPage: number;
  @Input()
  nextPage: number;

  constructor() {}
}
