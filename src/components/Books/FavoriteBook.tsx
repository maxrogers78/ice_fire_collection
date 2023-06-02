import { BiDetail } from 'react-icons/bi';
import { IBook } from '../../interfaces';
import { useState } from 'react';
import { BookDetailsModal, CustomModal } from '../../modals';
import moment from 'moment';
import { useBook } from '../../hooks';

interface Props {
  book: IBook;
}

const FavoriteBook = ({ book }: Props) => {
  const { removeFavoriteBook } = useBook();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full gap-3 rounded-lg bg-white px-5 py-3 shadow-md">
      <div className="w-full flex-1 overflow-hidden">
        <h2 className="truncate font-bold uppercase text-sky-900">
          {book.name}
        </h2>

        <hr className="my-2" />

        <div className="flex flex-col gap-3">
          <BookDetailInfo name="Autor" value={book.authors[0]} />
          <BookDetailInfo name="Editorial" value={book.publisher} />
          <BookDetailInfo
            name="Fecha de publicación"
            value={moment(book.released).format('DD/MM/YYYY')}
          />
        </div>
      </div>

      <div className="flex w-[20%] flex-col items-end justify-between gap-2">
        <button
          className="w-8 text-sky-600 child:h-full child:w-full"
          onClick={() => setIsModalOpen(true)}
        >
          <BiDetail />
        </button>

        <button
          className="text-right text-xs text-red-500 underline"
          onClick={() => removeFavoriteBook(book.isbn)}
        >
          Quitar de favoritos
        </button>
      </div>

      <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <BookDetailsModal setIsOpen={setIsModalOpen} book={book} />
      </CustomModal>
    </div>
  );
};

interface BookDetailInfoProps {
  name: string;
  value: string | number;
}

const BookDetailInfo = ({ name, value }: BookDetailInfoProps) => (
  <div>
    <p className="text-xs font-semibold leading-3">{name}</p>
    <p className="text-sm">{value}</p>
  </div>
);

export default FavoriteBook;
