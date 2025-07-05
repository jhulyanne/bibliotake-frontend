// Sei que há outras formas melhores de fazer isso, mas vou manter assim pois é o jeito que consigo entender e explicar o que acontece sem dificuldade

import { Book } from '../types';

// função que busca os livros da api 
// * retorna a lista de todos os livros ou lana um erro simples caso a requisição falhe
export async function fetchBooks(): Promise<Book[]> {
  const response = await fetch('https://bibliotake-api.onrender.com/books');
  if (!response.ok) throw new Error('Erro ao carregar livros');
  return response.json();
}