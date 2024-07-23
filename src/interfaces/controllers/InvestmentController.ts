
import { CreateInvestment } from "../../application/use-cases/CreateInvestment";
import { GetInvestment } from "../../application/use-cases/GetInvestment";
import { Investment } from "../../domain/entities/Investment";

export class InvestmentController {
    constructor(
        private createInvestment: CreateInvestment,
        private getInvestment: GetInvestment
    ) {}

    async create(req: any, res: any) {
        const { id, name, amountInvested } = req.body;
        const investment = new Investment(id, name, amountInvested);
        await this.createInvestment.execute(investment);
        res.status(201).send(investment);
    }

    async get(req: any, res: any) {
        const { id } = req.params;
        const investment = await this.getInvestment.execute(id);
        if (investment) {
            res.status(200).send(investment);
        } else {
            res.status(404).send({ message: "Investment not found" });
        }
    }
}
