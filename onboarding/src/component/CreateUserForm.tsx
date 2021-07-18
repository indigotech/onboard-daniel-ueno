import React from 'react';
import { useForm } from '../hooks/useForm';

export const CreateUserForm: React.FC = () => {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    birthDate: '',
  });
  const onSubmitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    clear();
    // createUser(form, clear);
  };
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type={'text'}
          name={'name'}
          value={form.name}
          onChange={onChange}
          placeholder='Nome'
          required
          pattern='(\w{3,})'
          title={'Seu nome deve ter pelo menos 3 caracteres'}
        />
        <input
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          placeholder='E-mail'
          required
          pattern='([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)'
          title={'O e-mail deve ser do tipo texto@texto.texto'}
        />
        <input
          type={'text'}
          name={'phone'}
          value={form.phone}
          onChange={onChange}
          placeholder='Telefone'
          required
          pattern='(\d.{8,}$)'
          title={'telefone deve ter pelo menos 8 dígitos'}
        />
        <input
          type={'text'}
          name={'role'}
          value={form.role}
          onChange={onChange}
          placeholder='role: admin ou user'
          required
          title={'role deve ser admin ou user'}
        />
        <input
          type={'date'}
          name={'birthDate'}
          value={form.birthDate}
          onChange={onChange}
          required
          max={today}
          title={'Apenas datas anteriores'}
        />
        <input
          type={'password'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          placeholder='password'
          required
          pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{8,}$)'
          title={'Sua senha deve ter no mínimo 8 caracteres, 1 letra e 1 dígito'}
        />
        <button>Criar Usuário</button>
      </form>
    </>
  );
};
