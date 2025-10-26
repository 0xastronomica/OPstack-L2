interface FeeProcessor {
    calculateFee(amount: number): number;
    processPayment(amount: number, payer: string): Promise<boolean>;
}

interface StableCoin {
    name: string;
    symbol: string;
    decimals: number;
    totalSupply: number;
    balanceOf(account: string): number;
    transfer(to: string, amount: number): boolean;
}

interface Bridge {
    deposit(asset: string, amount: number, recipient: string): Promise<boolean>;
    withdraw(asset: string, amount: number): Promise<boolean>;
}

interface L2StandardBridge extends Bridge {
    transferToL1(asset: string, amount: number, recipient: string): Promise<boolean>;
}

interface ERC20Portal {
    transferToken(token: string, amount: number, recipient: string): Promise<boolean>;
}