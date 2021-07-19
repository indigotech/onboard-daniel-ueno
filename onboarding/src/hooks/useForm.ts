import { useState } from 'react';

export const useForm = (initialState: CreateUser): [CreateUser, (event: any) => void, () => void] => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clear];
};

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  birthDate: string;
}
