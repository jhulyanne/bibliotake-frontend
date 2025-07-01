import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[15vh] flex items-center justify-between gap-4 p-4 bg-white shadow-sm">
      <div className="font-bold text-xl text-black">BiblioTake</div>
      <nav className="flex gap-4">
        <Link href="#livros" className="text-black">Livros</Link>
        <Link href="#emprestimos" className="text-black">Empréstimos</Link>
        <Link href="#usuarios" className="text-black">Usuários</Link>
      </nav>
    </header>
  );
}