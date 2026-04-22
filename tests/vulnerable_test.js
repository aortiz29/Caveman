// Archivo de prueba para Semgrep
const AWS_SECRET_KEY = "AKIAIMNO7890OR345678"; // Esto debería disparar una alerta de "High"
const DATABASE_URL = "postgres://admin:password123@localhost:5432/caveman_db";

function connect() {
    console.log("Conectando con la llave: " + AWS_SECRET_KEY);
}