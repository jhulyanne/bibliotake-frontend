import { Book } from '../types';

export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch('https://bibliotake-api.onrender.com/books');
  if (!response.ok) throw new Error('Erro ao carregar livros');
  return response.json();
}