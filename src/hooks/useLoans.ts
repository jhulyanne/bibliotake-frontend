import { Loan } from '../types';

// função que busca os empréstimos da api
// * retorna a lista de todos os empréstimos ou lança um erro simples no caso da requisição falhar
export async function fetchLoans(): Promise<Loan[]> {
  const response = await fetch('https://bibliotake-api.onrender.com/loans');
  if (!response.ok) throw new Error('Erro ao carregar empréstimos');
  return response.json();
}