import { createContext } from 'react';
import { IBook, IBookFilterValues, IBookNew } from '../../interfaces';

interface IBookContext {
  books: IBook[];
  filteredBooks: IBook[];
  favoriteBooks: IBook['isbn'][];
  selectedBook: IBook | undefined;

  // Methods
  getBooks: () => Promise<void>;
  addFavoriteBook: (id: IBook['isbn']) => void;
  removeFavoriteBook: (id: IBook['isbn']) => void;
  selectBook: (id: IBook['isbn']) => void;
  filterBooks: (filters: IBookFilterValues) => void;
  resetBooksToDefault: () => void;
  addNewBook: (bookValues: IBookNew) => void;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);
