import express from "express";
import config from "./config";
import salesRoutes from "./routes/sales.routes";
import productionRoutes from "./routes/production.routes";
const app = express();

app.set('port', config.port);

app.get("/", (req,res) => {
    res.send("WELCOME");
});

app.use(salesRoutes);
app.use(productionRoutes);

export default app;