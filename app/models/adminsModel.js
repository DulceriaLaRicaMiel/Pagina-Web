const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Número de rondas de salting que bcrypt usará para encriptar
const SALT_ROUNDS = 10;

class Administrador {
  static async findAll() {
    const result = await pool.query('SELECT * FROM ADMINISTRADOR');
    return result.rows;
  }

  static async findById(IdAdministrador) {
    const result = await pool.query('SELECT * FROM ADMINISTRADOR WHERE IdAdministrador = $1', [IdAdministrador]);
    return result.rows[0];
  }

  static async create(data) {
    const { Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia } = data;

    // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);

    const result = await pool.query(
      'INSERT INTO ADMINISTRADOR (Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
      [Nombre, ApPaterno, ApMaterno, Telefono, Correo, hashedPassword]
    );
    return result.rows[0];
  }

  static async update(IdAdministrador, data) {
    const { Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia } = data;

    // Si la contraseña fue enviada, encriptarla
        let hashedPassword = Contrasenia;
        if (Contrasenia) {
          hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);
        }

    const result = await pool.query(
      'UPDATE ADMINISTRADOR SET Nombre = $1, ApPaterno = $2, ApMaterno = $3, Telefono = $4, Correo = $5, Contrasenia = $6, updated_at = CURRENT_TIMESTAMP WHERE IdAdministrador = $7 RETURNING *',
      [Nombre, ApPaterno, ApMaterno, Telefono, Correo, hashedPassword, IdAdministrador]
    );
    return result.rows[0];
  }

  static async delete(IdAdministrador) {
    await pool.query('DELETE FROM ADMINISTRADOR WHERE IdAdministrador = $1', [IdAdministrador]);
    return { message: 'Administrator deleted successfully' };
  }
}

module.exports = Administrador;
