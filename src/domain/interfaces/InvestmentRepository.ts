
import { Investment } from "../entities/Investment";

export interface InvestmentRepository {
    create(investment: Investment): Promise<void>;
    getById(id: string): Promise<Investment | null>;
}
