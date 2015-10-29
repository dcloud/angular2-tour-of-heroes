let nextId = 30;

export class Hero {
    id: number;
    name: string;

    constructor(id?: number, name?: string) {
        this.name = name;
        this.id = id || nextId++;
    }
}
