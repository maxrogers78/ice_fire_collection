import { useState } from 'react';
import { useBook } from '../hooks';
import { BooksFilters, Button, Loader } from '../components';
import { BooksTable } from '../components';
import { AddBookModal, CustomModal } from '../modals';
import { BiBookAdd } from 'react-icons/bi';

const BooksPage = () => {
  const { isFetching } = useBook();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isFetching)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full flex-col gap-8">
        <BooksFilters />
        <BooksTable />
        <div className="ml-auto">
          <Button
            text="Nuevo libro"
            icon={<BiBookAdd />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Agregar libro"
      >
        <AddBookModal setIsOpen={setIsModalOpen} />
      </CustomModal>
    </div>
  );
};

export default BooksPage;
