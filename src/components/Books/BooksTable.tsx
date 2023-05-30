import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { BOOKS_TABLE_HEADERS } from '../../data';
import { useBook } from '../../hooks';
import { useTable } from 'react-table';
import { IBookTable } from '../../interfaces';
import { BooksTableItem } from '.';
import { BookDetailsModal } from '../../modals';

const BooksTable = () => {
  const { filteredBooks, selectedBook } = useBook();
  const [booksInTable, setBooksInTable] = useState<IBookTable[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useMemo(() => booksInTable, [booksInTable]);
  const columns = useMemo(() => BOOKS_TABLE_HEADERS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    setBooksInTable(
      filteredBooks.map((book) => ({
        ...book,
        characters: book.characters.length,
        povCharacters: book.povCharacters.length,
        released: moment(book.released).utc().format('DD/MM/YYYY')
      }))
    );
  }, [filteredBooks]);

  return (
    <div className="w-full">
      <table
        {...getTableProps()}
        className="table w-full table-auto text-center"
      >
        <thead className="bg-sky-600 font-bold text-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="child:p-3">
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <BooksTableItem
                {...row.getRowProps()}
                row={row}
                openModal={() => setIsModalOpen(true)}
              />
            );
          })}
        </tbody>
      </table>

      {selectedBook && (
        <BookDetailsModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default BooksTable;
