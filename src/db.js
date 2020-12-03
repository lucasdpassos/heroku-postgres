const Pool = require("pg").Pool

const pool = new Pool({
    user:"wprcbnmxjculuw",
    password:"7addb767935bb796ff99d2da1d76a5bd91e05ff26f9c08fb2e386111b840f8be",
    host:"ec2-52-22-216-69.compute-1.amazonaws.com",
    port:5432,
    database:"d5rkgu5oq6eqip",
    ssl: true
})
  
  



module.exports = pool