import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ActionMenu, EnrollmentList } from './styles';

export default function Enrollments() {
  return (
    <Container>
      <header>
        <h1>Gerenciando matrículas</h1>
        <ActionMenu>
          <Link to="/enrollments/new">Cadastrar</Link>
        </ActionMenu>
      </header>
      <EnrollmentList>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Plano</th>
            <th>Início</th>
            <th>Término</th>
            <th>Ativa</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Danillo Camargo</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maio de 2019</td>
            <td> </td>
            <td>
              <Link to="/enrollments/edit/1">editar</Link>
              <Link to="/enrollments/delete/1">apagar</Link>
            </td>
          </tr>
          <tr>
            <td>Danillo Camargo</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maio de 2019</td>
            <td> </td>
            <td>
              <Link to="/enrollments/edit/1">editar</Link>
              <Link to="/enrollments/delete/1">apagar</Link>
            </td>
          </tr>
          <tr>
            <td>Danillo Camargo</td>
            <td>Start</td>
            <td>30 de Abril de 2019</td>
            <td>30 de Maio de 2019</td>
            <td> </td>
            <td>
              <Link to="/enrollments/edit/1">editar</Link>
              <Link to="/enrollments/delete/1">apagar</Link>
            </td>
          </tr>
        </tbody>
      </EnrollmentList>
    </Container>
  );
}
