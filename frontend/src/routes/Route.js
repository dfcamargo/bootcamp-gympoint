import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_shared/auth';
import DefaultLayout from '~/pages/_shared/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  // .redireciona para SignIn caso o usuário não esteja autenticado
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // .rediciona para tela inicial caso o usuário esteja autenticado
  if (signed && !isPrivate) {
    return <Redirect to="/students" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// .definição dos tipo "isPrivate" e "component"
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

// .definição de valor padrão
RouteWrapper.defaultProps = {
  isPrivate: false,
};
