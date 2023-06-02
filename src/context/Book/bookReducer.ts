import { IBook, IBookState } from '../../interfaces';

type BookAction =
  | { type: 'getBooks'; payload: IBook[] }
  | { type: 'getFilteredBooks'; payload: IBook[] }
  | { type: 'getFavoriteBooks'; payload: IBook['isbn'][] }
  | { type: 'selectBook'; payload: IBook }
  | { type: 'addNewBook'; payload: IBook };

export const bookReducer = (
  state: IBookState,
  action: BookAction
): IBookState => {
  switch (action.type) {
    case 'getBooks':
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };

    case 'getFilteredBooks':
      return {
        ...state,
        filteredBooks: action.payload
      };

    case 'getFavoriteBooks':
      return {
        ...state,
        favoriteBooks: action.payload
      };

    case 'selectBook':
      return {
        ...state,
        selectedBook: action.payload
      };

    case 'addNewBook':
      return {
        ...state,
        books: [...state.books, action.payload],
        filteredBooks: [...state.filteredBooks, action.payload]
      };

    default:
      return state;
  }
};
