import { IOption } from '../interfaces';

export const ORDER_BY_OPTIONS: IOption[] = [
  {
    text: 'ID (Menor a mayor)',
    value: '1'
  },
  {
    text: 'ID (Mayor a menor)',
    value: '2'
  },
  {
    text: 'Nombre (Ascendente)',
    value: '3'
  },
  {
    text: 'Nombre (Descendente)',
    value: '4'
  },
  {
    text: 'Autor (Ascendente)',
    value: '5'
  },
  {
    text: 'Autor (Descendente)',
    value: '6'
  },
  {
    text: 'Editorial (Ascendente)',
    value: '7'
  },
  {
    text: 'Editorial (Descendente)',
    value: '8'
  },
  {
    text: 'Fecha de publicación (Más recientes)',
    value: '9'
  },
  {
    text: 'Fecha de publicación (Más antiguos)',
    value: '10'
  }
];
