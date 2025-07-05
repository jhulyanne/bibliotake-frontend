import { Loan } from '@/types';


export default function LoanCard({ loan }: { loan: Loan }) {
  // Formata as datas
  const loanDate = new Date(loan.loan_date).toLocaleDateString('pt-BR');
  const returnDate = loan.return_date 
    ? new Date(loan.return_date).toLocaleDateString('pt-BR') 
    : 'Não devolvido';

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="font-bold">CPF do usuário: {loan.user_cpf}</h3>
      <p className="text-gray-600">Livro ID: {loan.book_id}</p>
      <p className="text-sm">Data do empréstimo: {loanDate}</p>
      <p className="text-sm">Data de devolução: {returnDate}</p>
      <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
        loan.return_date ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {loan.return_date ? 'Devolvido' : 'Pendente'}
      </span>
    </div>
  );
}