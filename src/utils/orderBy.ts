import { IBook, IOption } from '../interfaces';

export const orderByBooks = (
  option: IOption['value'],
  filteredBooks: IBook[]
): IBook[] => {
  switch (option) {
    case '0':
      return filteredBooks;

    case '1':
      return filteredBooks.sort((a, b) => a.id - b.id);

    case '2':
      return filteredBooks.sort((a, b) => b.id - a.id);

    default:
      return filteredBooks;
  }
};
