import { Console } from "console";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTables: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {


    static run({base, limit, showTables, fileName, fileDestination}: RunOptions) {
        console.log('Server running...')
        
        const table = new CreateTable().execute({base, limit,});

        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileDestination,
                fileName,
            });

        if (showTables) {
        console.log(table)
        }

        (wasCreated)
            ? console.log('File created')
            : console.error('File not created')

    }
}