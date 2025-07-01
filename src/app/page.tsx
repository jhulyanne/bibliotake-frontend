import Header from './components/Header'; 
import BookCard from './components/BookCard'; 
import { fetchBooks } from '../hooks/useBooks'; 

export default async function Home() {
    const books = await fetchBooks();
  return (
    <>
     <Header />
    
    <main className="min-h-screen bg-gray-50">
      <section className="h-[85vh] flex items-center justify-center py-20 text-center bg-blue-600 text-white">
        {/* Seção Hero (Destaque) */}
        <section className="flex flex-col items-center py-12 gap-4">
        <h1 className="text-3xl font-bold">Bem-vindo(a) à BiblioTake</h1>
        <p className="text-center max-w-md">
          O sistema perfeito para administrar sua biblioteca comunitária.
        </p>
        <div className="w-64 h-48 bg-gray-200 rounded-lg"></div> {/* Placeholder SVG */}
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
      <section className="py-20 text-center bg-purple-600 text-black">
        {/* seção de empréstimos */}
        <p>Empréstimos aqui</p>
      </section>
      <section className="py-20 text-center bg-gray-600 text-black">
        {/* seção de usuários */}
        <p>Usuários aqui</p>
      </section>
    </main>
       // <footer></footer>
    </>
  );
}