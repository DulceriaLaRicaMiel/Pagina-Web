const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432, // Puerto obligatorio para Render
  ssl: {
    rejectUnauthorized: false // Configuración SSL requerida por Render
  },
  connectionTimeoutMillis: 5000, // Timeout de conexión
  idleTimeoutMillis: 30000 // Cierra conexiones inactivas después de 30s
});

// Manejo de errores de conexión
pool.on('error', (err) => {
  console.error('Error inesperado en el pool de PostgreSQL:', err);
  process.exit(-1);
});

// Verificación de conexión al iniciar (opcional pero recomendado)
(async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Conexión exitosa a PostgreSQL en Render');
    client.release();
  } catch (err) {
    console.error('❌ Error al conectar a PostgreSQL:', err.message);
    console.log('Verifica que:');
    console.log('1. Tus variables de entorno estén correctas');
    console.log('2. Tu IP esté en la allowlist de Render');
    console.log('3. La instancia de PostgreSQL no esté suspendida');
    process.exit(1);
  }
})();

module.exports = pool;