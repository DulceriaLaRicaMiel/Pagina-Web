/**
 * @swagger
 * components:
 *   schemas:
 *     Employees:
 *       type: object
 *       required:
 *         - Nombre
 *         - ApPaterno
 *         - ApMaterno
 *         - Telefono
 *         - NSS
 *         - RFC
 *         - Correo
 *         - Contrasenia
 *       properties:
 *         IdEmpleado:
 *           type: integer
 *           description: ID único del Empleado.
 *         Nombre:
 *           type: string
 *           description: Nombre del Empleado.
 *         ApPaterno:
 *           type: string
 *           description: Apellido Paterno del Empleado.
 *         ApMaterno:
 *           type: string
 *           description: Apellido Materno del Empleado.
 *         Telefono:
 *           type: integer
 *           description: Telefono del Empleado.
 *         NSS:
 *           type: string
 *           description: Número de Seguridad Social del Empleado.
 *         RFC:
 *           type: string
 *           description: Registro Federal de Contribuyentes del Empleado.
 *         Correo:
 *           type: string
 *           description: Correo Electrónico del Usuario.
 *         Contrasenia:
 *           type: string
 *           description: Contraseña del Usuario (encriptada).
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de Creación.
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de la última Actualización.
 *         deleted_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de Eliminación.
 *       example:
 *         IdEmpleado: 1
 *         Nombre: Zahid
 *         ApPaterno: Monraga
 *         ApMaterno: Contreras
 *         Telefono: 2719901240
 *         NSS: "123996789"
 *         RFC: "ABC123499789"
 *         Correo: "zahidmonraga@gmail.com"
 *         created_at: "2024-10-22T10:20:30Z"
 *         updated_at: "2024-10-22T10:20:30Z"
 *         deleted_at: null
 */

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Obtiene la lista de Todos los Empleados.
 *     tags: [EMPLOYEES (Consult)]
 *     responses:
 *       200:
 *         description: Lista de Empleados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employees'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Obtiene un Empleado por su ID.
 *     tags: [EMPLOYEES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Empleado.
 *     responses:
 *       200:
 *         description: Empleado Encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employees'
 *       404:
 *         description: Empleado no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

/**
/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Crea un Nuevo Empleado.
 *     tags: [EMPLOYEES]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del Empleado.
 *               ApPaterno:
 *                 type: string
 *                 description: Apellido Paterno del Empleado.
 *               ApMaterno:
 *                 type: string
 *                 description: Apellido Materno del Empleado.
 *               Telefono:
 *                 type: integer
 *                 description: Telefono del Empleado.
 *               NSS:
 *                 type: string
 *                 description: Número de Seguridad Social del Empleado.
 *               RFC:
 *                 type: string
 *                 description: Registro Federal de Contribuyentes del Empleado.
 *               Correo:
 *                 type: string
 *                 description: Correo Electrónico del Usuario.
 *                 example: "zahidmonraga@gmail.com"
 *               Contrasenia:
 *                 type: string
 *                 description: Contraseña del Usuario.
 *                 example: "password12345"
 *           example:
 *             Nombre: Zahid
 *             ApPaterno: Monraga
 *             ApMaterno: Contreras
 *             Telefono: 2711201240
 *             NSS: "123456789"
 *             RFC: "ABC123456789"
 *             Correo: "zahidmonraga@gmail.com"
 *             Contrasenia: "password12345"
 *     responses:
 *       201:
 *         description: El Empleado ha sido Creado con Éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employees'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/employees/{id}:
 *   put:
 *     summary: Actualiza un Empleado por su ID.
 *     tags: [EMPLOYEES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Empleado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del Empleado.
 *               ApPaterno:
 *                 type: string
 *                 description: Apellido Paterno del Empleado.
 *               ApMaterno:
 *                 type: string
 *                 description: Apellido Materno del Empleado.
 *               Telefono:
 *                 type: integer
 *                 description: Telefono del Empleado.
 *               NSS:
 *                 type: string
 *                 description: Número de Seguridad Social del Empleado.
 *               RFC:
 *                 type: string
 *                 description: Registro Federal de Contribuyentes del Empleado.
 *               Correo:
 *                 type: string
 *                 description: Correo Electrónico del Usuario.
 *                 example: "zahidmonraga@gmail.com"
 *               Contrasenia:
 *                 type: string
 *                 description: Contraseña del Usuario.
 *                 example: "password12345"
 *           example:
 *             Nombre: Zahid
 *             ApPaterno: Monraga
 *             ApMaterno: Contreras
 *             Telefono: 2711201240
 *             NSS: "987654321"
 *             RFC: "DEF987654321"
 *             Correo: "zahidmonraga@gmail.com"
 *             Contrasenia: "password12345"
 *     responses:
 *       200:
 *         description: El Empleado ha sido Actualizado con Éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employees'
 *       404:
 *         description: Empleado no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: Elimina un Empleado por su ID.
 *     tags: [EMPLOYEES]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Empleado.
 *     responses:
 *       204:
 *         description: Empleado Eliminado con Éxito.
 *       404:
 *         description: Empleado no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

const express = require('express');
const EmpleadoController = require('../controllers/employeesController');

const router = express.Router();

router.get('/', EmpleadoController.getAllEmpleados);
router.get('/:id', EmpleadoController.getEmpleadoById);  
router.post('/', EmpleadoController.createEmpleado);
router.put('/:id', EmpleadoController.updateEmpleado);  
router.delete('/:id', EmpleadoController.deleteEmpleado);  

module.exports = router;
