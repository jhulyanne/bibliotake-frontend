import Header from './components/Header'; // precisa ser relativo ao arquivo atual em nível hierárquico

export default function Home() {
  return (
    <>
     <Header />
    
    <main className="min-h-screen bg-gray-50">
      <section className="py-20 text-center bg-blue-600 text-white">
        {/* Seção Hero (Destaque) */}
        <ul>
          <li>Livros</li>
          <li>Empréstimos</li>
          <li>Usuários</li>
        </ul>
      </section>
      <section className="py-20 text-center bg-orange-600 text-black">
        <p>Livros aqui</p>
        {/* seção de  livros */}
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