const createCsvWriter = require('csv-writer').createObjectCsvWriter;
/* Using the csv-writer library to write the CSV file.
need to be installed using 'npm install csv-writer'
*/

const csvData = []; // Creating an array/oobject to store our generated custom data to put in the column.
const dataType = 'Asset Tag' // The type of structure or anything we want to generate the data for.
const numberOfEntries = 100000 // The number of records we want to generate.
const sheetHeaders = [{id: 'col1', title: 'Entity'},
    {id: 'col2', title: 'Asset Tag ID (Scan)'},
    {id: 'col3', title: 'ITem ID Link'},
    {id: 'col4', title: 'Asset Category'},
    {id: 'col5', title: 'Zone'}
] // Setting up number and titles of the headers of the CSV sheet.

for(i=1; i<=numberOfEntries; i++){
    const a = `${dataType}_ID_` + i
    csvData.push(a)
    /*
    for loop to generate the custom
    names for the type of data we want to bulk upload.
    */
}

// Random tags generation.
const randomTag = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const lengthOfTag = 26
let generatedTag = ''
for(i=0; i<=lengthOfTag; i++){
    generatedTag += randomTag.charAt(Math.floor(Math.random()*randomTag.length))
}

const csvWriter = createCsvWriter({path: `100_k_${dataType}.csv`,
    header: sheetHeaders, append: false
    /*
    Writing the CSV file headers.
    Setting the append to false as we
    dont want to re-write the existing file
    */
});

const records = csvData.map((item, index) => ({
    col1: dataType,
    col2: generatedTag+index,
    col3: '',
    col4: 'Default',
    col5: 'Lab-Bench-Right'
    /*
    creating a data variable which will hold
    the data we have to write in our CSV file
    in different columns based on the col numbers.
    */
}));

csvWriter.writeRecords(records).then( () => {
    console.log('Success')
}).catch((err) => {
    console.log(err)
}); // writing the csv file and validating the write operation.