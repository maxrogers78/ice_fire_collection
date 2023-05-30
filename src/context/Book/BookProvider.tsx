import { useEffect, useReducer } from 'react';
import { BookContext, bookReducer } from '.';
import {
  IBook,
  IBookFilterValues,
  IBookNew,
  IBookState
} from '../../interfaces';
import { getBooksRequest } from '../../api';
import { generateRandomString } from '../../utils';

const INITIAL_STATE: IBookState = {
  books: [],
  filteredBooks: [],
  favoriteBooks: [],
  selectedBook: undefined
};

interface IBookProviderProps {
  children: JSX.Element | JSX.Element[];
}

const BookProvider = ({ children }: IBookProviderProps) => {
  const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);

  useEffect(() => {
    if (localStorage.getItem('favoriteBooks')) {
      dispatch({
        type: 'getFavoriteBooks',
        payload: JSON.parse(localStorage.getItem('favoriteBooks')!)
      });
    }
  }, []);

  const getBooks = async (): Promise<void> => {
    const { data } = await getBooksRequest();
    const books = data.map((book: IBook, i: number) => ({
      ...book,
      id: i + 1
    }));
    dispatch({ type: 'getBooks', payload: books });
    dispatch({ type: 'getFilteredBooks', payload: books });
  };

  const addFavoriteBook = (id: IBook['isbn']) => {
    let favorites: IBook['isbn'][] = [];

    if (localStorage.getItem('favoriteBooks')) {
      favorites = JSON.parse(localStorage.getItem('favoriteBooks')!);
      favorites.push(id);
      localStorage.setItem(
        'favoriteBooks',
        JSON.stringify([...new Set(favorites)])
      );
    } else {
      favorites.push(id);
      localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
    }

    dispatch({ type: 'getFavoriteBooks', payload: favorites });
  };

  const removeFavoriteBook = (id: IBook['isbn']) => {
    if (!localStorage.getItem('favoriteBooks')) return;

    let favorites: IBook['isbn'][] = JSON.parse(
      localStorage.getItem('favoriteBooks')!
    );
    favorites = favorites.filter((fav) => fav !== id);
    localStorage.setItem(
      'favoriteBooks',
      JSON.stringify([...new Set(favorites)])
    );

    dispatch({ type: 'getFavoriteBooks', payload: favorites });
  };

  const selectBook = (id: IBook['isbn']) => {
    const foundBook = state.books.find((book) => book.isbn === id);
    if (!foundBook) return;
    dispatch({ type: 'selectBook', payload: foundBook });
  };

  const filterBooks = (filters: IBookFilterValues) => {
    const books = state.books.filter(
      (book) =>
        book.name
          .toLowerCase()
          .trim()
          .includes(filters.name.toLowerCase().trim()) &&
        book.authors.some((author) =>
          author
            .toLowerCase()
            .trim()
            .includes(filters.author.toLowerCase().trim())
        )
    );

    dispatch({ type: 'getFilteredBooks', payload: books });
  };

  const resetBooksToDefault = () => {
    dispatch({ type: 'getFilteredBooks', payload: state.books });
  };

  const addNewBook = (bookValues: IBookNew) => {
    const newBook: IBook = {
      ...bookValues,
      numberOfPages: 0,
      authors: [bookValues.author],
      characters: [],
      povCharacters: [],
      country: 'Chile',
      id: state.books.length + 1,
      isbn: generateRandomString(15),
      mediaType: bookValues.genre,
      publisher: 'Grupo Aspasia',
      url: 'https://grupoaspasia.com/es/'
    };

    dispatch({ type: 'addNewBook', payload: newBook });
  };

  return (
    <BookContext.Provider
      value={{
        ...state,
        getBooks,
        addFavoriteBook,
        removeFavoriteBook,
        selectBook,
        filterBooks,
        resetBooksToDefault,
        addNewBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
