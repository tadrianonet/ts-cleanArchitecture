
import { InvestmentRepository } from "../../domain/interfaces/InvestmentRepository";
import { Investment } from "../../domain/entities/Investment";

export class InMemoryInvestmentRepository implements InvestmentRepository {
    private investments: Map<string, Investment> = new Map();

    async create(investment: Investment): Promise<void> {
        this.investments.set(investment.id, investment);
    }

    async getById(id: string): Promise<Investment | null> {
        return this.investments.get(id) || null;
    }
}
