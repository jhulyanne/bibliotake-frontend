import { User } from '../types';

// função que busca os usuários da api
// * retorna a lista de todos os usuários ou lança um erro simples caso a requisição falhe
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://bibliotake-api.onrender.com/users');
  if (!response.ok) throw new Error('Erro ao carregar usuários');
  return response.json();
}