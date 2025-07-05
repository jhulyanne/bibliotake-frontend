import Header from './components/Header'; 
import BookCard from './components/BookCard'; 
import LoanCard from './components/LoanCard';
import UserCard from './components/UserCard';

import { fetchBooks } from '../hooks/useBooks'; 
import { fetchLoans } from '../hooks/useLoans';
import { fetchUsers } from '../hooks/useUsers';

export default async function Home() {
    const books = await fetchBooks();
    const loans = await fetchLoans();
    const users = await fetchUsers();

  return (
    <>
     <Header />
    <main className="min-h-screen bg-amber-50">
      <section className="h-[85vh] flex items-center justify-center py-20 text-center bg-amber-100 text-black">
        {/* Seção Hero (Destaque) */}
        <section className="flex flex-col items-center py-12 gap-4 ">
          <h1 className="text-2xl font-bold">Bem-vindo(a) à <span className="hover:text-amber-400">BiblioTake</span></h1>
          <p className="text-center max-w-md text-1xl">
            O sistema perfeito para administrar sua biblioteca comunitária.
          </p>
          <iframe src="https://lottie.host/embed/2ee4ad77-e7ab-489c-bdfe-1327710140b2/S0j8XDq694.lottie"></iframe>
        </section>
      </section>

      <section id="books" className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Livros Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section id="loans" className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Empréstimos Cadastrados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>
      </section>

      <section id="users" className="py-12 container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Usuários Cadatrados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>

    </main>
    <footer></footer>
    </>
  );
}