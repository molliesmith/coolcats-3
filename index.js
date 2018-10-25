// Homework from OKCoders
// Create a command line to do list using Commander
// >  - Print menu
// >    - Add to List
// >    - Remove from List
// >    - Display List

// program
//   .version('0.1.0')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);

const fs = require('fs');

const program = require('commander');

program
    .version ('1.0')
    .option('-p, --print', 'Print Menu')
    .option('-a, --add [name]', 'Add to List')
    .option('-r, --remove [name]', 'Remove from List')
    .option('-d, --display', 'Display List')
    .parse(process.argv);

if(program.print) {
    console.log('Print Menu');
}

if(program.display) {
    console.log('Display List')
}

function addItemToList(itemName) {
    console.log('Added', itemName)
    fs.writeFileSync('./list.txt' , [itemName])
}

fs.writeFileSync('./testfile.json', 'Hello Everybody!');