
import { InvestmentRepository } from "../../domain/interfaces/InvestmentRepository";
import { Investment } from "../../domain/entities/Investment";

export class GetInvestment {
    constructor(private investmentRepository: InvestmentRepository) {}

    async execute(id: string): Promise<Investment | null> {
        return await this.investmentRepository.getById(id);
    }
}
