const pool = require('../config/db');

class Ventas {
    
    static async findAll() {
        const result = await pool.query('SELECT * FROM VENTAS');
        return result.rows;
    }

    static async findById(IdVenta) {
        const result = await pool.query('SELECT * FROM VENTAS WHERE IdVenta = $1', [IdVenta]);
        return result.rows[0];
    }

    static async create(data) {
        const { IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago } = data; 
        const result = await pool.query(
            `INSERT INTO VENTAS 
             (IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) 
             RETURNING *`,
            [IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago]
        );
        return result.rows[0];
    }

    static async update(IdVenta, data) {
        const { IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago } = data;  
        const result = await pool.query(
            `UPDATE VENTAS
             SET IdCliente = $1, 
                 IdEmpleado = $2, 
                 Cliente = $3, 
                 FechaVenta = $4, 
                 Hora = $5,
                 Total = $6, 
                 MetodoPago = $7, 
                 updated_at = CURRENT_TIMESTAMP
             WHERE IdVenta = $8 
             RETURNING *`,
            [IdCliente, IdEmpleado, Cliente, FechaVenta, Hora, Total, MetodoPago, IdVenta]
        );
        return result.rows[0];
    }

    static async delete(IdVenta) {
        // Opción 1: Eliminación física
        await pool.query('DELETE FROM VENTAS WHERE IdVenta = $1', [IdVenta]);
        
        // Opción 2: Eliminación lógica (si prefieres mantener el registro)
        // await pool.query('UPDATE VENTAS SET deleted_at = CURRENT_TIMESTAMP WHERE IdVenta = $1', [IdVenta]);
        
        return { message: 'Venta eliminada exitosamente' };
    }
}

module.exports = Ventas;