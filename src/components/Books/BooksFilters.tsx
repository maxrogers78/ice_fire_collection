import { AiOutlineReload } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useFormik } from 'formik';
import { IBookFilterValues } from '../../interfaces';
import { Button, Input } from '../';
import { useBook } from '../../hooks';

const INITIAL_VALUES: IBookFilterValues = {
  name: '',
  author: ''
};

const BooksFilters = () => {
  const { filterBooks, resetBooksToDefault } = useBook();
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => handleFilterBooks(values)
  });

  const handleFilterBooks = async (values: IBookFilterValues) => {
    filterBooks(values);
  };

  const handleResetFilters = () => {
    resetForm();
    resetBooksToDefault();
  };

  return (
    <div className="w-full flex-1 rounded-lg bg-gray-100 px-12 py-6">
      <h2 className="font-bold uppercase">Filtros</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex w-full items-stretch justify-between gap-4"
      >
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Título"
        />

        <Input
          id="author"
          name="author"
          value={values.author}
          onChange={handleChange}
          placeholder="Autor"
        />

        <Button type="submit" text="Buscar" icon={<BiSearch />} />
        <button
          type="button"
          className="group h-auto rounded-lg border-2 border-sky-500 bg-red-200 bg-transparent px-4 text-lg text-sky-500"
          onClick={handleResetFilters}
        >
          <AiOutlineReload className="transition-transform group-hover:rotate-180" />
        </button>
      </form>
    </div>
  );
};

export default BooksFilters;
