import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import StudentNew from '~/pages/Students/new';
import StudentEdit from '~/pages/Students/edit';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/new" component={StudentNew} isPrivate />
      <Route path="/students/edit" component={StudentEdit} isPrivate />

      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
    </Switch>
  );
}
