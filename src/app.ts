
import { yarg  } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);
// console.log(yarg);

(async()=>{
    await main ();
})();

async function main () {

    const { b:base, l:limit, s:showTables, n:fileName, d:fileDestination } = yarg

    ServerApp.run({base, limit, showTables, fileName, fileDestination});
}