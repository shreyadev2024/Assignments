const fs = require('fs');
const yargs = require('yargs');

const filenamesFile = 'filenamesFile.txt';

// Configure yargs options
const argv = yargs
    .option('filename', {
        alias: 'f',
        describe: 'Filename to write',
        demandOption: true,
        type: 'string',
    })
    .argv;

// Function to write text to a new file
function writeToFile(filename) {
    const content = 'You are awesome';

    // Check if the file already exists
    if (fs.existsSync(filename)) {
        console.log(`File '${filename}' already exists. Please choose a different filename.`);
    } else {
        // Write content to the new file
        fs.writeFileSync(filename, content);
        console.log(`Content written to '${filename}': ${content}`);

        // Append the filename to the filenamesFile
        fs.appendFileSync(filenamesFile, filename + '\n');
        console.log(`Filename '${filename}' appended to '${filenamesFile}'.`);
    }
}



// Check if the filenames file exists; if not, create it
if (!fs.existsSync(filenamesFile)) {
    fs.writeFileSync(filenamesFile, '');existingFilenames
   
}

 // Read existing filenames from the file
const existingFilenames = fs.readFileSync(filenamesFile, 'utf-8').split('\n').filter(Boolean) || [];


// Ask the user for a new filename
const filename = argv.filename;

// Check if the filename already exists
if (existingFilenames.includes(filename)) {
    console.log(`Filename '${filename}' already exists. Please choose a different filename.`);
} else {
    // Write to the new file and update the filenames file
    writeToFile(filename);
}
