const fs = require('fs')

if (fs.existsSync('./notes.txt')) {
    fs.appendFileSync('notes.txt', 'I appended the file!')
}
else {
    fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
    fs.appendFileSync('notes.txt', 'I appended the file!')
}



