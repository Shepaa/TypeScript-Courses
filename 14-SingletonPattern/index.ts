class BankAccount {
    private readonly iban: string
    private static nextID = 1
    private readonly _id: number
    private readonly _currency: string
    private balance = 0

    // private readonly holder: IBankClient,
    constructor(currency: string) {
        this._currency = currency
        this.iban = 'UA1234554312'
        this._id = BankAccount.nextID++;
    }

    public get id() {
        return this._id
    }

    public get currency() {
        return this._currency
    }

    public deposit(amount: number) {
        this.balance += amount
    }

    public withdraw(amount: number) {
        this.balance -= amount
    }
}

class Bank {
    private static instance: Bank | null
    private accounts: Map<string, BankAccount[]> = new Map()
    private constructor() {
    }

    static getInstance() {
        if (!Bank.instance) {
            Bank.instance = new Bank()
        }
        return Bank.instance
    }

    public openAccount(accountId: string, currency: string) {
        const account = new BankAccount(currency);

        if (this.accounts.has(accountId)) {
            this.accounts.get(accountId)?.push(account);
        } else {
            this.accounts.set(accountId, [account]);
        }
    }

    public closeAccount(clientId: string, accountId: number) {
        const clientsAccounts = this.accounts.get(clientId)

        if (clientsAccounts) {
            const updateAccounts = clientsAccounts.filter(acc => acc.id !== accountId)
        }
    }
}



