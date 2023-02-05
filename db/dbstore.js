const util = require('util');
const fs = require('fs')

const uuidv1 = require('uuid/v1');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class dbstore {
    read() {
        return readFile('db/db.json', 'utf-8')
    }

    write(notes) {
        return writeFile('db/db.json', JSON.stringify(notes))
    }

    // get all notes
    getAllNotes() {
        return this.read().then((notes) => {
            let notesResponse;

            try {
                notesResponse = [].concat(JSON.parse(notes))
            } catch (error) {
                notesResponse = []
            }
            return notesResponse;
        })
    }
    // add a note

    // delete a note
}

module.exports = new dbstore();