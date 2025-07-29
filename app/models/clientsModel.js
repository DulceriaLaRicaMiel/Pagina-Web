const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Número de rondas de salting que bcrypt usará para encriptar
const SALT_ROUNDS = 10;

class Cliente {
    // Obtener todos los clientes
    static async findAll() {
        const result = await pool.query('SELECT * FROM CLIENTES');
        return result.rows;
    }

    // Obtener un cliente por su ID
    static async findById(IdCliente) {
        const result = await pool.query('SELECT * FROM CLIENTES WHERE IdCliente = $1', [IdCliente]);
        return result.rows[0];
    }

    // Crear un nuevo cliente
    static async create(data) {
        const { Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia } = data; 

        // Encriptar la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);

        const result = await pool.query(
            `INSERT INTO CLIENTES (Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [Nombre, ApPaterno, ApMaterno, Telefono,Correo, hashedPassword]
        );
        return result.rows[0];
    }

    // Actualizar un cliente
    static async update(IdCliente, data) {
        const { Nombre, ApPaterno, ApMaterno, Telefono, Correo, Contrasenia } = data;  

        // Si la contraseña fue enviada, encriptarla
        let hashedPassword = Contrasenia;
        if (Contrasenia) {
          hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUNDS);
        }

        const result = await pool.query(
            `UPDATE CLIENTES
             SET Nombre = $1, ApPaterno = $2, ApMaterno = $3, Telefono = $4, Correo = $5, Contrasenia = $6, updated_at = CURRENT_TIMESTAMP
             WHERE IdCliente = $7 RETURNING *`,
            [Nombre, ApPaterno, ApMaterno, Telefono, Correo, hashedPassword, IdCliente]
        );
        return result.rows[0];
    }

    // Eliminar un cliente
    static async delete(IdCliente) {
        await pool.query('DELETE FROM CLIENTES WHERE IdCliente = $1', [IdCliente]);
        return { message: 'Clients deleted successfully' };
    }
}

module.exports = Cliente;
