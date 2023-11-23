// ====================
// Puerto
// ====================

process.env.PORT = process.env.PORT || 4000;

// ====================
// Entorno
// ====================

process.env.NODE_EVN = process.env.NODE_EVN || 'dev';

// ====================
// BASE DE DATOS
// ====================

let urlDB = '';

if (process.env.NODE_ENV == 'dev') {
    urlDB = "mongodb://localhost:4000/Login";
} else {
    urlDB = "here write the mongo concection with mongo atlas and other type of connection mode"
};

process.env.URLDB = urlDB;

// ====================
// Vencimiento del token 
// ====================

process.env.CADUCIDAD_TOKEN = '48h';

// ====================
// SEED de autenticacion
// ====================

process.env.SEED_AUTENTICATION = process.env_AUTENTICACION || 'este-es-el-seed-desarrollo';

