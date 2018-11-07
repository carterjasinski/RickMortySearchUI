import {Character} from './character-model';
export interface CharactersResponse {
    characters: Character[];
    currentPage: number;
    nextPage?: number;
  }
