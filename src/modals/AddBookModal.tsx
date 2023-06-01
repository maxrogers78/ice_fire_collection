import { Dispatch, SetStateAction } from 'react';
import { useFormik } from 'formik';
import { Input } from '../components';
import { IBookNew } from '../interfaces';
import { useBook } from '../hooks';
import moment from 'moment';

const INITIAL_VALUES: IBookNew = {
  name: '',
  author: '',
  genre: '',
  released: ''
};

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddBookModal = ({ setIsOpen }: Props) => {
  const { addNewBook } = useBook();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => handleAddNewBook(values)
  });

  const handleAddNewBook = (values: IBookNew) => {
    addNewBook(values);
    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full flex-col gap-2">
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Título"
          required
        />

        <Input
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          placeholder="Autor"
          required
        />

        <Input
          id="genre"
          name="genre"
          value={values.genre}
          onChange={handleChange}
          placeholder="Género"
          required
        />

        <Input
          type="date"
          id="released"
          name="released"
          value={values.released}
          onChange={handleChange}
          placeholder="Fecha de publicación"
          required
          max={moment().format('YYYY-MM-DD')}
        />
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
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default AddBookModal;
