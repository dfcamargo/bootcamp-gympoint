import * as Yup from 'yup';
import { addMonths } from 'date-fns';

import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';

class EnrollmentController {
  async index(req, res) {
    const response = await Enrollment.findAll();

    // .response
    return res.json(response);
  }

  async store(req, res) {
    // .esquema de validação
    const schema = Yup.object().shape({
      student_id: Yup.number().required,
      plan_id: Yup.number().required,
      start_date: Yup.date().required,
    });

    // .validação dos dados da requisição
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { duration, price } = Plan.findByPk(req.body.plan_id);

    const enrollment = {
      ...req.body,
      end_date: addMonths(req.body.start_date, duration),
      price,
    };

    const { student_id, plan_id, start_date, end_date } = Enrollment.create(
      enrollment
    );

    return res.json({ student_id, plan_id, start_date, end_date, price });
  }

  async update(req, res) {
    return res.json({ message: true });
  }
}

export default new EnrollmentController();
