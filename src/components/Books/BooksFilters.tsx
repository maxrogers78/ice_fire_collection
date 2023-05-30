import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IBookFilterValues } from '../../interfaces';
import { Button, Input } from '../';
import { useBook } from '../../hooks';

const INITIAL_VALUES: IBookFilterValues = {
  name: '',
  author: ''
};

const BooksFilters = () => {
  const { filterBooks, resetBooksToDefault } = useBook();
  const [filterValues, setFilterValues] = useState(INITIAL_VALUES);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleFilterBooks = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterBooks(filterValues);
  };

  const handleResetFilters = () => {
    setFilterValues(INITIAL_VALUES);
    resetBooksToDefault();
  };

  return (
    <div className="w-full flex-1 rounded-lg bg-gray-100 px-12 py-6">
      <h2 className="font-bold uppercase">Filtros</h2>

      <form
        onSubmit={handleFilterBooks}
        className="mt-4 flex w-full items-stretch justify-between gap-4"
      >
        <Input
          id="name"
          name="name"
          value={filterValues.name}
          onChange={handleInputChange}
          placeholder="Título"
        />

        <Input
          id="author"
          name="author"
          value={filterValues.author}
          onChange={handleInputChange}
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
