import  fs  from 'fs';
import { yarg } from './config/plugins/args.plugin';
// console.log(yarg);

const {b:base, l:limit, s:showTable} = yarg;

let outputmessage = "";
const headerMessage = `
========================================
            Tabla del ${base}
========================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputmessage += `${base} X ${i} = ${ base * i}\n`;
}

outputmessage = headerMessage + outputmessage;

if (showTable) {

console.log(outputmessage);
}

const outputPath =  `outputs`

fs.mkdirSync(outputPath, { recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputmessage)
console.log("file created!");





