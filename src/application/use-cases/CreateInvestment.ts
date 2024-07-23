
import { InvestmentRepository } from "../../domain/interfaces/InvestmentRepository";
import { Investment } from "../../domain/entities/Investment";

export class CreateInvestment {
    constructor(private investmentRepository: InvestmentRepository) {}

    async execute(investment: Investment): Promise<void> {
        await this.investmentRepository.create(investment);
    }
}
