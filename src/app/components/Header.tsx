import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[15vh] flex items-center justify-between gap-4 p-4 bg-yellow-900/90 shadow-sm">
      <div className="font-bold text-xl text-white">BiblioTake</div>
      <nav className="flex gap-4">
        <Link href="#books" className="text-white">Livros</Link>
        <Link href="#loans" className="text-white">Empréstimos</Link>
        <Link href="#users" className="text-white">Usuários</Link>
      </nav>
    </header>
  );
}