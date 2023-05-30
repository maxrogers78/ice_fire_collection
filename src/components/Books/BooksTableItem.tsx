import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Row } from 'react-table';
import { IBook } from '../../interfaces';
import { useBook } from '../../hooks';

interface Props {
  row: Row<{}>;
  openModal: () => void;
}

const BooksTableItem = ({ row, openModal }: Props) => {
  const {
    books,
    favoriteBooks,
    addFavoriteBook,
    removeFavoriteBook,
    selectBook
  } = useBook();
  const [book, setBook] = useState<IBook | undefined>();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundBook = books.find((book) => book.id === row.index + 1);
    if (foundBook) setBook(foundBook);
  }, [row]);

  useEffect(() => {
    if (!book) return;

    if (favoriteBooks.includes(book.isbn)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteBooks, book]);

  const handleToggleFavorite = () => {
    if (!book) return;

    if (isFavorite) {
      removeFavoriteBook(book.isbn);
    } else {
      addFavoriteBook(book.isbn);
    }
  };

  const handleOpenModal = () => {
    selectBook(book?.isbn ?? '');
    openModal();
  };

  return (
    <motion.tr
      initial={row.index % 2 === 0 ? { x: 20 } : { x: -20 }}
      animate={{ x: 0 }}
      className={`hover:bg-gray-300 child:p-3
        ${row.index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}
      `}
    >
      {row.cells.map((cell, i) => (
        <td
          {...cell.getCellProps()}
          className={`${i === 0 ? 'font-bold' : ''}`}
        >
          {cell.render('Cell', {
            handleToggleFavorite,
            handleOpenModal,
            isFavorite
          })}
        </td>
      ))}
    </motion.tr>
  );
};

export default BooksTableItem;
