
import express from "express";
import investmentRoutes from "../interfaces/routes/InvestmentRoutes";

const app = express();
app.use(express.json());
app.use("/api", investmentRoutes);

export default app;
