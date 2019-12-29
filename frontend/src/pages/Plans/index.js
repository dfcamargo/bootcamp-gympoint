import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, ActionMenu, PlanList } from './styles';

export default function Plans() {
  const [plans, setPlens] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      setPlens(response.data);
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando planos</h1>
        <ActionMenu>
          <Link to="/plan/new">Cadastrar</Link>
        </ActionMenu>
      </header>
      <PlanList>
        <thead>
          <tr>
            <th>Título</th>
            <th>Duração</th>
            <th>Valor p/ mês</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>{plan.duration}</td>
              <td>{plan.price}</td>
              <td>
                <Link to={`/plan/edit/${plan.id}`}>editar</Link>
                <Link to={`/plan/delete/${plan.id}`}>apagar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </PlanList>
    </Container>
  );
}
