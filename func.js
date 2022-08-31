const fdk=require('@fnproject/fdk');
const scraper = require("./main.cjs").default;

fdk.handle(async function(input){
  const id = parseInt(input.id);

  return await scraper(id);
})
