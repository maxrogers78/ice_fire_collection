import { Dispatch, SetStateAction } from 'react';
import { IBook } from '../interfaces';
import moment from 'moment';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  book: IBook;
}

const BookDetailsModal = ({ setIsOpen, book }: Props) => {
  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold uppercase text-sky-700">
          {book.name}
        </h2>
        <h4 className="text-xs font-light">{book.isbn}</h4>
      </div>

      <hr className="my-4" />

      <div className="grid grid-cols-2 gap-4">
        <BookDetailInfo name="Autor" value={book.authors[0]} />
        <BookDetailInfo name="Editorial" value={book.publisher} />
        <BookDetailInfo
          name="Fecha de publicación"
          value={moment(book.released).format('DD/MM/YYYY')}
        />
        <BookDetailInfo name="País" value={book.country} />
        <BookDetailInfo name="Tipo" value={book.mediaType} />
        <BookDetailInfo
          name="Páginas"
          value={book.numberOfPages > 0 ? book.numberOfPages : '-'}
        />
        <BookDetailInfo
          name="Protagonistas"
          value={
            book.povCharacters.length > 0 ? book.povCharacters.length : '-'
          }
        />
        <BookDetailInfo
          name="Personajes"
          value={book.characters.length > 0 ? book.characters.length : '-'}
        />
      </div>

      <div className="mt-4 flex items-center justify-end gap-4 border-t pt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-gray-200/50 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

interface BookDetailInfoProps {
  name: string;
  value: string | number;
}

const BookDetailInfo = ({ name, value }: BookDetailInfoProps) => (
  <div>
    <p className="text-xs font-semibold uppercase">{name}</p>
    <p className="text-lg font-light">{value}</p>
  </div>
);

export default BookDetailsModal;
