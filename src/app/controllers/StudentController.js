import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    // .validações do estudante
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .moreThan(15)
        .required(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    // .verifica se o estudante já foi cadastrado
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    // .cria estudante
    const { name, email, age, weight, height } = await Student.create(req.body);

    return res.json({ name, email, age, weight, height });
  }

  async update(req, res) {
    // .validações do estudante
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number().moreThan(15),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const { email } = req.body;

    // .verifica se o estudante existe
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }

    // .verifica se o e-mail foi alterado para verificar se já existe outro estudante cadastrado
    if (email && email !== student.email) {
      const emailExists = await Student.findOne({ where: { email } });
      if (emailExists) {
        return res.status(400).json({ error: 'Student already exists' });
      }
    }

    // .atualiza o estudante
    const { name, age, weight, height } = await student.update(req.body);

    return res.json({ name, email, age, weight, height });
  }
}

export default new StudentController();
