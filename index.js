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

// Configuración mejorada para CORS
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? [
      process.env.FRONTEND_URL,
      /https:\/\/[a-zA-Z0-9-]+\.onrender\.com$/,
      process.env.RENDER_EXTERNAL_URL
    ].filter(Boolean)
  : '*';

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware mejorado para URL base
app.use((req, res, next) => {
  req.baseUrl = process.env.RENDER_EXTERNAL_URL || 
               process.env.BASE_URL || 
               `${req.protocol}://${req.get('host')}`;
  next();
});

// Configuración Swagger dinámica mejorada
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API OF THE RICH HONEY',
      version: '1.0.0',
      description: 'API documentation for the Rich Honey confectionery.',
    },
    servers: [{
      url: process.env.RENDER_EXTERNAL_URL || 
          process.env.BASE_URL || 
          `http://localhost:${process.env.PORT || 3000}`
    }]
  },
  apis: ['./app/routes/*.js']
};

swaggerDocs(app, swaggerOptions);

// Rutas (sin cambios)
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/administrator', adminsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/sales', salesRoutes);

// Health Check Endpoint (nuevo)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'Rich Honey API',
    environment: process.env.NODE_ENV || 'development',
    baseUrl: req.baseUrl,
    renderService: process.env.RENDER_SERVICE_NAME,
    renderUrl: process.env.RENDER_EXTERNAL_URL
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  const serverUrl = process.env.RENDER_EXTERNAL_URL || 
                   process.env.BASE_URL || 
                   `http://localhost:${PORT}`;
  
  console.log(`\n=== Rich Honey API ===`);
  console.log(`✅ Servidor activo en: ${serverUrl}`);
  console.log(`🔧 Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📚 Swagger UI: ${serverUrl}/api-docs`);
  console.log(`🏥 Health Check: ${serverUrl}/health`);
  console.log(`🌍 Render URL: ${process.env.RENDER_EXTERNAL_URL || 'No configurada'}\n`);
});