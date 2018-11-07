import { Component, Input } from '@angular/core';
import { Character } from '../../models/character-model';

@Component({
  selector: 'app-search-results-row',
  templateUrl: './search-results-row.component.html',
  styleUrls: ['./search-results-row.component.scss']
})
export class SearchResultsRowComponent {
  @Input()
  character: Character;

  constructor() {}
}
