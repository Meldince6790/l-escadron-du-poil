const fs = require('fs');
const mysql = require('mysql2/promise');

function getSslConfig() {
  const caPath = process.env.DB_CA_PATH;

  if (!caPath) {
    return undefined;
  }

  try {
    return {
      ca: fs.readFileSync(caPath),
      rejectUnauthorized: true,
    };
  } catch {
    console.error('Impossible de lire le certificat CA MySQL');
    throw new Error('Certificat CA MySQL indisponible');
  }
}

function createPool() {
  const ssl = getSslConfig();

  const config = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  };

  if (ssl) {
    config.ssl = ssl;
  }

  return mysql.createPool(config);
}

const pool = createPool();

async function verifyConnection() {
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.query('SELECT 1');
    console.log('Connexion MySQL opérationnelle');
  } catch (error) {
    const code = error && error.code ? ` (${error.code})` : '';
    console.error(`Échec de la connexion MySQL${code}`);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

module.exports = {
  pool,
  verifyConnection,
};
