import { IBook, IBookState } from '../../interfaces';

type BookAction =
  | { type: 'getBooks'; payload: IBook[] }
  | { type: 'getFavoriteBooks'; payload: IBook['isbn'][] }
  | { type: 'selectBook'; payload: IBook };

export const bookReducer = (
  state: IBookState,
  action: BookAction
): IBookState => {
  switch (action.type) {
    case 'getBooks':
      return {
        ...state,
        books: action.payload
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

    default:
      return state;
  }
};
