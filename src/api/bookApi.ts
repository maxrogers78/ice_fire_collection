import axios from 'axios';

const bookFetcher = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api'
});

// Requests
export const getBooksRequest = async () => await bookFetcher.get('/books');
