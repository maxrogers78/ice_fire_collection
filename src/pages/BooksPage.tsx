import { useEffect, useState } from 'react';
import { useBook } from '../hooks';
import { Loader } from '../components';
import { BooksTable } from '../components';

const BooksPage = () => {
  const { getBooks } = useBook();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBooksData();
  }, []);

  const loadBooksData = async () => {
    setIsLoading(true);

    await getBooks();

    setIsLoading(false);
  };

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="w-full">
      <div></div>

      <BooksTable />
    </div>
  );
};

export default BooksPage;
