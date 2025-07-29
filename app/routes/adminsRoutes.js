/**
 * @swagger
 * components:
 *   schemas:
 *     Administrator:
 *       type: object
 *       required:
 *         - Nombre
 *         - ApPaterno
 *         - ApMaterno
 *         - Telefono
 *         - Correo
 *         - Contrasenia
 *       properties:
 *         IdAdministrador:
 *           type: integer
 *           description: ID único del Administrador.
 *         Nombre:
 *           type: string
 *           description: Nombre del Administrador.
 *         ApPaterno:
 *           type: string
 *           description: Apellido Paterno del Administrador.
 *         ApMaterno:
 *           type: string
 *           description: Apellido Materno del Administrador.
 *         Telefono:
 *           type: integer
 *           description: Telefono del Administrador.
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
 *         Correo: "zahidmonraga@gmail.com"
 *         created_at: "2024-10-22T10:20:30Z"
 *         updated_at: "2024-10-22T10:20:30Z"
 *         deleted_at: null
 */

/**
 * @swagger
 * /api/administrator:
 *   get:
 *     summary: Obtiene la lista de Todos los Administradores.
 *     tags: [ADMINISTRATOR (Consult)]
 *     responses:
 *       200:
 *         description: Lista de Administrador.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Administrator'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/administrator/{id}:
 *   get:
 *     summary: Obtiene un Administrador por su ID.
 *     tags: [ADMINISTRATOR]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Administrador.
 *     responses:
 *       200:
 *         description: Administrador Encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Administrator'
 *       404:
 *         description: Administrador no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

/**
/**
 * @swagger
 * /api/administrator:
 *   post:
 *     summary: Crea un Nuevo Administrador.
 *     tags: [ADMINISTRATOR]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del Administrador.
 *               ApPaterno:
 *                 type: string
 *                 description: Apellido Paterno del Administrador.
 *               ApMaterno:
 *                 type: string
 *                 description: Apellido Materno del Administrador.
 *               Telefono:
 *                 type: integer
 *                 description: Telefono del Administrador.
 *               Correo:
 *                 type: string
 *                 description: Correo Electrónico del Usuario.
 *                 example: "zahidmonraga@gmail.com"
 *               Contrasenia:
 *                 type: string
 *                 description: Contraseña del Usuario (encriptada).
 *                 example: "password12345"
 *           example:
 *             Nombre: Zahid
 *             ApPaterno: Monraga
 *             ApMaterno: Contreras
 *             Telefono: 2711201240
 *             Correo: "zahidmonraga@gmail.com"
 *             Contrasenia: "password12345"
 *     responses:
 *       201:
 *         description: El Administrador ha sido Creado con Éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Administrator'
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/administrator/{id}:
 *   put:
 *     summary: Actualiza un Administrador por su ID.
 *     tags: [ADMINISTRATOR]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Administrador.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del Administrador.
 *               ApPaterno:
 *                 type: string
 *                 description: Apellido Paterno del Administrador.
 *               ApMaterno:
 *                 type: string
 *                 description: Apellido Materno del Administrador.
 *               Telefono:
 *                 type: integer
 *                 description: Telefono del Administrador.
 *               Correo:
 *                 type: string
 *                 description: Correo Electrónico del Usuario.
 *                 example: "zahidmonraga@gmail.com"
 *               Contrasenia:
 *                 type: string
 *                 description: Contraseña del Usuario (encriptada).
 *                 example: "password12345"
 *           example:
 *             Nombre: Zahid
 *             ApPaterno: Monraga
 *             ApMaterno: Contreras
 *             Telefono: 2711201240
 *             Correo: "zahidmonraga@gmail.com"
 *             Contrasenia: "password12345"
 *     responses:
 *       200:
 *         description: El Administrador ha sido Actualizado con Éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Administrator'
 *       404:
 *         description: Administrador no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

/**
 * @swagger
 * /api/administrator/{id}:
 *   delete:
 *     summary: Elimina un Administrador por su ID.
 *     tags: [ADMINISTRATOR]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del Administrador.
 *     responses:
 *       204:
 *         description: Administrador Eliminado con Éxito.
 *       404:
 *         description: Administrador no Encontrado.
 *       500:
 *         description: Error en el Servidor.
 */

const express = require('express');
const router = express.Router();
const AdministradorController = require('../controllers/adminsController');

// Ruta GET /api/administrator
router.get('/', AdministradorController.getAllAdministrador);

// Ruta GET /api/administrator/:id
router.get('/:id', AdministradorController.getAdministradorById);

// Ruta POST /api/administrator
router.post('/', AdministradorController.createAdministrador);

// Ruta PUT /api/administrator/:id
router.put('/:id', AdministradorController.updateAdministrador);

// Ruta DELETE /api/administrator/:id
router.delete('/:id', AdministradorController.deleteAdministrador);

module.exports = router;