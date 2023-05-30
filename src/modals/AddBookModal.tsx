import {
  Dispatch,
  SetStateAction,
  Fragment,
  useState,
  ChangeEvent
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Input } from '../components';
import { IBookNew } from '../interfaces';
import { useBook } from '../hooks';

const INITIAL_VALUES: IBookNew = {
  name: '',
  author: '',
  genre: '',
  released: ''
};

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddBookModal = ({ isOpen, setIsOpen }: Props) => {
  const { addNewBook } = useBook();
  const [bookValues, setBookValues] = useState<IBookNew>(INITIAL_VALUES);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookValues({ ...bookValues, [name]: value });
  };

  const handleAddNewBook = () => {
    addNewBook(bookValues);
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Agregar libro
                </Dialog.Title>
                <div className="mt-6">
                  <form className="flex w-full flex-col gap-2">
                    <Input
                      id="name"
                      name="name"
                      value={bookValues.name}
                      onChange={handleInputChange}
                      placeholder="Título"
                      required
                    />

                    <Input
                      id="author"
                      name="author"
                      value={bookValues.author}
                      onChange={handleInputChange}
                      placeholder="Autor"
                      required
                    />

                    <Input
                      id="genre"
                      name="genre"
                      value={bookValues.genre}
                      onChange={handleInputChange}
                      placeholder="Género"
                      required
                    />

                    <Input
                      type="date"
                      id="released"
                      name="released"
                      value={bookValues.released}
                      onChange={handleInputChange}
                      placeholder="Fecha de publicación"
                      required
                    />
                  </form>
                </div>

                <div className="mt-4 flex items-center justify-end gap-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                    onClick={handleAddNewBook}
                  >
                    Agregar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddBookModal;
