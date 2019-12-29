import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const response = await Plan.findAll();

    // .response
    return res.json(response);
  }

  async store(req, res) {
    // .esquema de validação
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    // .validação dos dados da requisição
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // .verifica se o mesmo plano já foi cadastrado
    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    // .cria o plano
    const { title, duration, price } = await Plan.create(req.body);

    // .response
    return res.json({ title, duration, price });
  }

  async update(req, res) {
    // .esquema de validação
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    // .validação dos dados da requisição
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // .localiza plano
    const { id } = req.params;
    const { title } = req.body;

    const plan = await Plan.findByPk(id);
    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    // .verifica se o mesmo plano já foi cadastrado
    if (title && title !== plan.title) {
      const planExists = await Plan.findOne({ where: { title } });

      if (planExists) {
        return res.status(400).json({ error: 'Plan already exists' });
      }
    }

    // .atualiza plano
    const { duration, price } = await plan.update(req.body);

    // .response
    return res.json({ title, duration, price });
  }
}

export default new PlanController();
