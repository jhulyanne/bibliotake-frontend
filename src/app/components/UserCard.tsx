import { User } from '@/types';

export default function UserCard({ user }: { user: User }) {

  return (
    <div className="bg-white p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md border border-gray-200">
      <h3 className="font-bold">Nome completo: {user.full_name}</h3>
      <p className="text-gray-600">CPF: {user.cpf}</p>
      <p className="text-gray-600">ID do usuário: {user.id}</p>
      <p className="text-gray-600">Telefone: {user.phone_number}</p>
    </div>
  );
}