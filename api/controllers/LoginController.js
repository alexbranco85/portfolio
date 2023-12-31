const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const UserController = {

  login: async (req, res) => {
    try {
      const login = await User.findOne({
        where: {
          login: req.body.login
        }
      })

      if (login && bcrypt.compareSync(req.body.password, login.password)) {
        const { id_user } = login;
        const token = jwt.sign({ id_user }, process.env.SECRET, {
          expiresIn: 3000
        });
        return res.json({ auth: true, token: token, success: true });

      } else {
        return res.status(401).json({ error: 'Login e/ou Senha inválido!' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor' });
    }
  },
  verify: async (req, res) => {
    let token = req.body.token;
    try {
      const decodedToken = await jwt.verify(token, process.env.SECRET);

      return res.status(200).json({ auth: true, success: true });
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ auth: false, message: 'Token expirado', success: false });
      }
    }
  }
}

module.exports = UserController;