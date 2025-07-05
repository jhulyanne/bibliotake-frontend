export interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  available: boolean;
};

export interface Loan {
  id: number;
  user_cpf: string;
  book_id: number;
  loan_date: string;
  return_date?: string;
};

export interface User {
  id: number,
  cpf: string,
  full_name: string,
  phone_number: string,
  address: string
};