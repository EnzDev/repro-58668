export class Container<T> {
    constructor(private constraint: T[], private driven ?: T[]) {}

    get all(): T[] {
        return [...this.constraint, ...(this.driven ?? [])];
    }

    get first(): T | undefined {
        return this.all.find(() => true);
    }
}

export interface V {
    working: string;
    a_number: number;
}