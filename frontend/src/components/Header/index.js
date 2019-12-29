import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-horizontal.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    // .requisição para sair do sistema
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/students">Alunos</Link>
          <Link to="/plans">Planos</Link>
          <Link to="/enrollments">Matrículas</Link>
          <Link to="/">Pedidos de Auxílio</Link>
        </nav>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
