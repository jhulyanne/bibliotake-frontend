import { Book } from '@/types'

export default function BookCard({ book }: { book: Book })  {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <span className={`inline-block mt-2 px-2 py-1 rounded text-xs ${
        book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {book.available ? 'Disponível' : 'Emprestado'}
      </span>
    </div>
  );
}