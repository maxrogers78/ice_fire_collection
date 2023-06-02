import { AiOutlineReload } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { IBookFilterValues } from '../../interfaces';
import { useBook } from '../../hooks';
import { Button, Input } from '../';

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
    <motion.div className="w-full rounded-lg bg-gray-100 p-4 lg:px-12 lg:py-6">
      <h2 className="font-bold uppercase">Filtros</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex w-full flex-col items-stretch justify-between gap-4 lg:flex-row"
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

        <div className="flex items-stretch justify-center gap-4">
          <Button
            type="submit"
            text="Buscar"
            icon={<BiSearch />}
            classes="w-full lg:w-max"
          />
          <button
            type="button"
            className="group h-auto rounded-lg border-2 border-sky-500 bg-red-200 bg-transparent px-4 text-lg text-sky-500"
            onClick={handleResetFilters}
          >
            <AiOutlineReload className="transition-transform group-hover:rotate-180" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BooksFilters;
