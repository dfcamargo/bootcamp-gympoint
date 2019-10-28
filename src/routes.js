import { Router } from 'express';

// importa "middlewares"
import authMiddleware from './app/middleware/auth';

// importa "controllers"
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Bem-Vindo' });
});

routes.post('/sessions', SessionController.store);

// "middleware" para verificar autenticação
routes.use(authMiddleware);

// **** ROTAS PARA USUÁRIOS AUTENTICADO ****
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

export default routes;
