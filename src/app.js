import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/router/router.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));

// Middlewares
app.use(express.json());

// Routes
app.use(routes.views);
app.use('/api', routes.empleados);
app.use('/api', routes.vehiculos);
app.use('/api', routes.createInfo);
app.use('/api', routes.login);

export { app };