export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
    name?: string;
    destination?: string;
}


export class CreateTable implements CreateTableUseCase {

    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}

    execute({base, limit = 10}:CreateTableOptions){

        let outputmessage = '';
        for (let i = 1; i <= limit; i++) {
            outputmessage += `${base} X ${i} = ${ base * i}\n`;
        }
        return outputmessage;
    }

}