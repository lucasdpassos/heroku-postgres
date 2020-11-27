const db = require('../db') 

module.exports = {
    getAll: () => {
        return new Promise( (resolve, reject) => {

            db.collection('notes').get(), (error, results) => {
                if(error) { reject(error); return; }
                resolve(results)
            }

        })
    }
}