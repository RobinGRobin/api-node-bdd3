import express from "express";
import config from "./config";
import salesRoutes from "./routes/sales.routes";
const app = express();

app.set('port', config.port);

app.use(salesRoutes);

export default app;