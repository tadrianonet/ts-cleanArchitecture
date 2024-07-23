import { InMemoryInvestmentRepository } from "../src/infrastructure/repositories/InMemoryInvestmentRepository";
import { CreateInvestment } from "../src/application/use-cases/CreateInvestment";
import { Investment } from "../src/domain/entities/Investment";

describe("CreateInvestment Use Case", () => {
    it("should create a new investment", async () => {
        const investmentRepository = new InMemoryInvestmentRepository();
        const createInvestment = new CreateInvestment(investmentRepository);
        
        const investment = new Investment("1", "Investment 1", 1000);
        await createInvestment.execute(investment);
        
        const createdInvestment = await investmentRepository.getById("1");
        expect(createdInvestment).not.toBeNull();
        expect(createdInvestment?.name).toBe("Investment 1");
        expect(createdInvestment?.amountInvested).toBe(1000);
    });
});
