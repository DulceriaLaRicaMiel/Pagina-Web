const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// Endpoint para login
router.post('/login', async (req, res) => {
  const { correo, contrasenia } = req.body;

  if (!correo || !contrasenia) {
    return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
  }

  try {
    // Buscar en ambas tablas (clientes, empleados y administrador)
    const [clienteResult, empleadoResult, administradorResult] = await Promise.all([
      pool.query('SELECT * FROM clientes WHERE correo = $1', [correo]),
      pool.query('SELECT * FROM empleados WHERE correo = $1', [correo]),
      pool.query('SELECT * FROM administrador WHERE correo = $1', [correo])
    ]);

    let user = null;
    let userType = null;

    if (clienteResult.rows.length > 0) {
      user = clienteResult.rows[0];
      userType = 'cliente';
    } else if (empleadoResult.rows.length > 0) {
      user = empleadoResult.rows[0];
      userType = 'empleado';
    } else if (administradorResult.rows.length > 0) {
      user = administradorResult.rows[0];
      userType = 'administrador';
    } else {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { 
        id: user.idcliente || user.idempleado || user.idadministrador,
        type: userType,
        email: user.correo
      },
      process.env.JWT_SECRET || 'default_secret', // Cambia esto por una variable de entorno segura
      { expiresIn: '8h' }
    );

    // Eliminar la contraseña antes de enviar la respuesta
    delete user.contrasenia;

    res.json({
      success: true,
      token,
      user,
      type: userType
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;