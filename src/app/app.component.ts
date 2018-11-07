import { Component } from '@angular/core';
import { Character } from './models/character-model';
import { CharactersService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characters: Character[] = [];
  currentPage = 1;
  nextPage = null;
  hideNavigationButtons = true;
  constructor(private charactersService: CharactersService) {}

  loading: boolean;
  error: boolean;

  getCharacters(searchQuery: string, page?: number) {
    this.error = false;
    this.loading = true;
    this.charactersService
      .getCharacters(searchQuery, page ? page : null)
      .subscribe(
        result => {
          this.characters = result.characters;
          this.currentPage = result.currentPage;
          this.nextPage = result.nextPage;
          this.setNavigationButtonVisibility();
          this.loading = false;
        },
        error => {
          this.error = true;
        }
      );
  }

  setNavigationButtonVisibility() {
    this.hideNavigationButtons =
      this.currentPage === 1 && this.nextPage === null;
  }
}
