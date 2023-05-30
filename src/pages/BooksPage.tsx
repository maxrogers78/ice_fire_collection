import { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useBook } from '../hooks';
import { BooksFilters, Button, Loader } from '../components';
import { BooksTable } from '../components';
import { AddBookModal } from '../modals';

const BooksPage = () => {
  const { getBooks } = useBook();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="flex w-full flex-col gap-8">
        <BooksFilters />
        <BooksTable />
        <div className="ml-auto">
          <Button
            text="Nuevo libro"
            icon={<AiOutlinePlusCircle />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <AddBookModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default BooksPage;
