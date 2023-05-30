import { createContext } from 'react';
import { IBook } from '../../interfaces';

interface IBookContext {
  books: IBook[];
  favoriteBooks: IBook['isbn'][];
  selectedBook: IBook | undefined;

  // Methods
  getBooks: () => Promise<void>;
  addFavoriteBook: (id: IBook['isbn']) => void;
  removeFavoriteBook: (id: IBook['isbn']) => void;
  selectBook: (id: IBook['isbn']) => void;
}

export const BookContext = createContext<IBookContext>({} as IBookContext);
