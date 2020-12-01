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
    one: async (req, res) => {

        let id = req.params.id

        let results = ''
        await db.collection("notes").where('id', '==', id).get().then((querySnapshot) => { 
             querySnapshot.forEach(doc => {
                results = doc.data()                
                 
             }) 
                               
                 
                
             
         })
         res.send(results)
         
        
     },
    new: (req, res) => {

    },
    edit: (req, res) => {

    },
    delete: (req, res) => {

    },
}