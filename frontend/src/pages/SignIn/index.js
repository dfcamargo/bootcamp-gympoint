import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // .chama requisição para login
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <strong>Seu E-Mail</strong>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
          />
        </label>

        <label htmlFor="password">
          <strong>Sua Senha</strong>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
          />
        </label>

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
