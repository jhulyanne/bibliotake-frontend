import Link from "next/link";

// componente que renderiza a header (caso um dia seja mais que uma landing page)
export default function Header() {
  return (
    <header className="h-[15vh] flex items-center justify-between gap-4 p-4 bg-yellow-900/90 shadow-sm">
      <div className="font-bold text-xl text-white hover:text-amber-950">BiblioTake</div>
      <nav className="flex gap-4">
        <Link href="#books" className="text-white hover:text-amber-300">Livros</Link>
        <Link href="#loans" className="text-white hover:text-amber-300">Empréstimos</Link>
        <Link href="#users" className="text-white hover:text-amber-300">Usuários</Link>
      </nav>
    </header>
  );
}