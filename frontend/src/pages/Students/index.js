import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { Container, ActionMenu, StudentList } from './styles';

export default function Students() {
  const [students, getStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      getStudents(response.data);
    }

    // carrega alunos cadastrados
    loadStudents();
  }, []);

  return (
    <Container>
      <header>
        <h1>Gerenciando alunos</h1>
        <ActionMenu>
          <Link to="/students/new">Cadastrar</Link>
          <input type="text" placeholder="Buscar aluno" />
        </ActionMenu>
      </header>
      <StudentList>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/students/edit/${student.id}`}>editar</Link>
                <Link to={`/students/delete/${student.id}`}>apagar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentList>
    </Container>
  );
}
