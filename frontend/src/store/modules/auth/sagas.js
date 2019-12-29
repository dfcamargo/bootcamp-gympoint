import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    // .recebe informações de autenticação
    const { email, password } = payload;

    // .requisição para autenticação no sistema
    const response = yield call(api.post, '/sessions', { email, password });

    // .pega valores de retorno
    const { token, user } = response.data;

    // .insere o token no cabeçalho da requisição
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // .chama requisição de sucesso
    yield put(signInSuccess(token, user));

    // .redireciona para tela principal
    history.push('/students');
  } catch (error) {
    // .exibe mensagem de falha
    console.tron.warn('Falha na autenticação, verifique seus dados');

    // .chama requisição de falha
    yield put(signFailure());
  }
}

export function signOut() {
  // .rediciona para tela de autenticação
  history.push('/');
}

export function setToken({ payload }) {
  // .veirfica se existe variável
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    // .insere o token no cabeçalho da requisição
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
