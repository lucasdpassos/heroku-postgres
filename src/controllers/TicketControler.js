const TicketService = require('../services/TicketService')
const db = require('../db') 
const { json } = require('body-parser')
const Ticket = require('../models/ticket')



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
    new: async (req, res) => {

        
        const data = req.body 
            const ticket = await db.collection('notes').doc().set(data)
        res.send("dados escritos com sucesso")

        
            
        
    },
    edit: (req, res) => {

    },
    delete: (req, res) => {

    },
}