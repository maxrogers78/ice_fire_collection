import { useEffect, useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import moment from 'moment';
import { BOOKS_TABLE_HEADERS } from '../../data';
import { useBook } from '../../hooks';
import { IBookTable } from '../../interfaces';
import { BookDetailsModal, CustomModal } from '../../modals';
import { BooksTableItem } from '.';

const BooksTable = () => {
  const { filteredBooks, selectedBook } = useBook();
  const [booksInTable, setBooksInTable] = useState<IBookTable[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useMemo(() => booksInTable, [booksInTable]);
  const columns = useMemo(() => BOOKS_TABLE_HEADERS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  useEffect(() => {
    setBooksInTable(
      filteredBooks.map((book) => ({
        ...book,
        author: book.authors[0],
        characters: book.characters.length,
        povCharacters: book.povCharacters.length,
        released: moment(book.released).utc().format('DD/MM/YYYY')
      }))
    );
  }, [filteredBooks]);

  return (
    <div className="w-full">
      {filteredBooks.length > 0 ? (
        <table
          {...getTableProps()}
          className="table w-full table-auto text-center"
        >
          <thead className="bg-sky-600 font-bold text-gray-100">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="child:p-3">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </th>
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
      ) : (
        <div className="relative mx-auto w-max px-8 py-6">
          <div className="absolute left-0 top-0 h-8 w-12 border-8 border-b-0 border-r-0 border-red-500" />
          <div className="absolute bottom-0 right-0 h-8 w-12 border-8 border-l-0 border-t-0 border-red-500" />

          <p className="w-full text-center text-lg font-semibold uppercase tracking-tight">
            No hemos encontrado libros con los filtros indicados
          </p>
        </div>
      )}

      {selectedBook && (
        <CustomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <BookDetailsModal setIsOpen={setIsModalOpen} book={selectedBook} />
        </CustomModal>
      )}
    </div>
  );
};

export default BooksTable;
