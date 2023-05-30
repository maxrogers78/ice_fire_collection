import { useContext } from 'react';
import { BookContext } from '../context';

export const useBook = () => useContext(BookContext);
