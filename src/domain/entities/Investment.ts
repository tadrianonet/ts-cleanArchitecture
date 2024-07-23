
export class Investment {
    constructor(
        public id: string,
        public name: string,
        public amountInvested: number
    ) {}

    describe(): string {
        return `Investment: ${this.name}, Amount Invested: $${this.amountInvested}`;
    }
}
