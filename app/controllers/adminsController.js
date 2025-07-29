const Administrador = require('../models/adminsModel');

class AdministradorController {
  static async getAllAdministrador(req, res) {
    try {
      const administrador = await Administrador.findAll();
      res.json(administrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAdministradorById(req, res) {
    try {
      const administrador = await Administrador.findById(req.params.id);
      if (!administrador) {
        return res.status(404).json({ message: 'Administrator not found' });
      }
      res.json(administrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createAdministrador(req, res) {
    try {
      const administrador = await Administrador.create(req.body);
      res.status(201).json(administrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateAdministrador(req, res) {
    try {
      const administrador = await Administrador.update(req.params.id, req.body);
      if (!administrador) {
        return res.status(404).json({ message: 'Administrator not found or already deleted' });
      }
      res.json(administrador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  static async deleteAdministrador(req, res) {
    try {
      const result = await Administrador.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AdministradorController;
