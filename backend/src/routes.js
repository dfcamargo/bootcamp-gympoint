import { Router } from 'express';

// importa "middlewares"
import authMiddleware from './app/middlewares/auth';

// importa "controllers"
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Bem-Vindo' });
});

routes.post('/sessions', SessionController.store);

// "middleware" para verificar autenticação
routes.use(authMiddleware);

// **** ROTAS PARA USUÁRIOS AUTENTICADO ****
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);

routes.get('/enrollments', EnrollmentController.index);
routes.post('/enrollments', EnrollmentController.store);
routes.put('/enrollments/:id', EnrollmentController.update);

export default routes;
