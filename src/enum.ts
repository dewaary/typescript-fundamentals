export enum CustomerType {
    PLATINUM = 'PLATINUM',
    GOLD = 'GOLD',
    REGULAR = 'REGULAR'
}


export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}