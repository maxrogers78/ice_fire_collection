export interface IBookState {
  books: IBook[];
  filteredBooks: IBook[];
  favoriteBooks: IBook['isbn'][];
  selectedBook: IBook | undefined;
}

export interface IBook {
  id: number;
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

export interface IBookTable {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: number;
  povCharacters: number;
}

export interface IBookFilterValues {
  name: string;
  author: string;
}

export interface IBookNew {
  name: string;
  author: string;
  genre: string;
  released: string;
}
