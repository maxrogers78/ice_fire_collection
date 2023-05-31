import { Column } from 'react-table';
import { BiDetail } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const BOOKS_TABLE_HEADERS: Column[] = [
  {
    Header: '#',
    accessor: 'id'
  },
  {
    Header: 'Nombre',
    accessor: 'name'
  },
  {
    Header: 'Autor',
    accessor: 'author'
  },
  {
    Header: 'Editorial',
    accessor: 'publisher'
  },
  {
    Header: 'Fecha de publicación',
    accessor: 'released'
  },
  {
    Header: 'Acciones',
    Cell: (props: any) => (
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={props.handleOpenModal}
          className="hover:opacity-80"
        >
          <BiDetail className="h-6 w-6 text-sky-600" />
        </button>

        <button
          type="button"
          className="text-amber-500 hover:opacity-80 child:h-6 child:w-6"
          onClick={props.handleToggleFavorite}
        >
          {props.isFavorite ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
    )
  }
];
