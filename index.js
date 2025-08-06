require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRoutes = require('./app/routes/usersRoutes');
const clientsRoutes = require('./app/routes/clientsRoutes');
const employeesRoutes = require('./app/routes/employeesRoutes');
const adminsRoutes = require('./app/routes/adminsRoutes');
const productsRoutes = require('./app/routes/productsRoutes');
const salesRoutes = require('./app/routes/salesRoutes');
const authRoutes = require('./app/routes/authRoutes');
const swaggerDocs = require('./app/config/swagger');

const app = express();

// Configuración dinámica para CORS
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      process.env.FRONTEND_URL,
      'https://https://pagina-web-1-hqfw.onrender.com',
      `https://${process.env.RENDER_SERVICE_NAME}.onrender.com`
    ].filter(Boolean)
  : '*';

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para URL base dinámica
app.use((req, res, next) => {
  req.baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
  next();
});

// Configuración Swagger dinámica
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API OF THE RICH HONEY',
      version: '1.0.0',
      description: 'API documentation for the Rich Honey confectionery.',
    },
    servers: [{
      url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`
    }]
  },
  apis: ['./app/routes/*.js']
};

swaggerDocs(app, swaggerOptions);

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/administrator', adminsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/sales', salesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  const serverUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
  console.log(`Servidor corriendo en ${serverUrl}`);
  console.log(`Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Documentación Swagger: ${serverUrl}/api-docs`);
});