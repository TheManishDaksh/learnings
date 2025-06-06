import { createClient } from "redis";
const client = createClient();
client.connect();

async function  main() {
    const response = await client.brPop("problems",0);
    console.log(response);
    
}

main();