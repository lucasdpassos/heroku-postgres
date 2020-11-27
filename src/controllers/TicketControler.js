const TicketService = require('../services/TicketService')
const db = require('../db') 




module.exports = {
    ping: (req, res) => {
        res.send("pong")
    },
    all: async (req, res) => {
        
        let results = []
       await db.collection("notes").get().then((querySnapshot) => { 
            querySnapshot.forEach(function(doc) {
                results.push(doc.data())                
                
               
            });
        })
        res.send(results)
        
       
    },
    one: (req, res) => {

    },
    new: (req, res) => {

    },
    edit: (req, res) => {

    },
    delete: (req, res) => {

    },
}