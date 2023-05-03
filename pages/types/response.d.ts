export type ApiLayer = {
    success: boolean;
    query: Query;
    info: Info;
    date: Date;
    result: number;
}

export type Info = {
    timestamp: number;
    rate: number;
}

export type Query = {
    from: string;
    to: string;
    amount: number;
}