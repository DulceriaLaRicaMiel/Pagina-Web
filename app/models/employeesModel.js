const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Número de rondas de salting que bcrypt usará para encriptar
const SALT_ROUNDS = 10;

class Empleado {
  static async findAll() {
    const result = await pool.query('SELECT * FROM EMPLEADOS');
    return result.rows;
  }

  static async findById(IdEmpleado) {
    const result = await pool.query('SELECT * FROM EMPLEADOS WHERE IdEmpleado = $1', [IdEmpleado]);
    return result.rows[0];
  }

  static async create(data) {
    const { Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, Contrasenia } = data;

    // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);

    const result = await pool.query(
      'INSERT INTO EMPLEADOS (Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, Contrasenia, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *',
      [Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, hashedPassword]
    );
    return result.rows[0];
  }

  static async update(IdEmpleado, data) {
    const { Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, Contrasenia } = data;

    // Si la contraseña fue enviada, encriptarla
        let hashedPassword = Contrasenia;
        if (Contrasenia) {
          hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);
        }

    const result = await pool.query(
      'UPDATE EMPLEADOS SET Nombre = $1, ApPaterno = $2, ApMaterno = $3, Telefono = $4, NSS = $5, RFC = $6, Correo = $7, Contrasenia = $8, updated_at = CURRENT_TIMESTAMP WHERE IdEmpleado = $9 RETURNING *',
      [Nombre, ApPaterno, ApMaterno, Telefono, NSS, RFC, Correo, hashedPassword, IdEmpleado]
    );
    return result.rows[0];
  }

  static async delete(IdEmpleado) {
    await pool.query('DELETE FROM EMPLEADOS WHERE IdEmpleado = $1', [IdEmpleado]);
    return { message: 'Employees deleted successfully' };
  }
}

module.exports = Empleado;
