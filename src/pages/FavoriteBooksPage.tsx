import { useEffect, useState } from 'react';
import { IBook } from '../interfaces';
import { useBook } from '../hooks';
import { FavoriteBook, Loader } from '../components';

const FavoriteBooksPage = () => {
  const { isFetching, filteredBooks, favoriteBooks } = useBook();
  const [favoriteBooksToDisplay, setFavoriteBooksToDisplay] = useState<IBook[]>(
    []
  );

  useEffect(() => {
    const foundBooks = filteredBooks.filter((book) =>
      favoriteBooks.includes(book.isbn)
    );
    setFavoriteBooksToDisplay(foundBooks);
  }, [favoriteBooks, filteredBooks]);

  if (isFetching)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="w-full">
      <h1 className="mb-4 w-max border-b border-sky-500 pr-4 text-xl uppercase">
        Libros favoritos
      </h1>

      {favoriteBooksToDisplay.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteBooksToDisplay.map((book) => (
            <FavoriteBook key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p>No has seleccionado libros favoritos</p>
      )}
    </div>
  );
};

export default FavoriteBooksPage;
