import Sequelize from 'sequelize';

// .configurações do banco de dados
import dbConfig from '../config/database';

// .models
import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Enrollment from '../app/models/Enrollment';

const models = [User, Student, Plan, Enrollment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // .inica uma nova conexão
    this.conn = new Sequelize(dbConfig);

    // .percorre os módulos registrador iniando a conexão com o banco de dados
    models
      .map(model => model.init(this.conn))
      .map(
        model => model && model.associate && model.associate(this.conn.models)
      );
  }
}

export default new Database();
