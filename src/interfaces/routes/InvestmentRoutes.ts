
import { Router } from "express";
import { InvestmentController } from "../controllers/InvestmentController";
import { InMemoryInvestmentRepository } from "../../infrastructure/repositories/InMemoryInvestmentRepository";
import { CreateInvestment } from "../../application/use-cases/CreateInvestment";
import { GetInvestment } from "../../application/use-cases/GetInvestment";

const investmentRepository = new InMemoryInvestmentRepository();
const createInvestment = new CreateInvestment(investmentRepository);
const getInvestment = new GetInvestment(investmentRepository);
const investmentController = new InvestmentController(createInvestment, getInvestment);

const router = Router();

router.post("/investments", (req, res) => investmentController.create(req, res));
router.get("/investments/:id", (req, res) => investmentController.get(req, res));

export default router;
