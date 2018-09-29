var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATR' });
});

module.exports = router;


async function start(){

//   const { Client } = require('pg')
//   const client = new Client()
// //task:https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist


// //==================Option 2 of authentication ============================== doesn't work
//   // const client = new Client({
//   //   user: 'public',
//   //   host: 'localhost',
//   //   database: 'VL',
//   //   //password: '',
//   //   port: 55445,
//   // })
  
//   // const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

//   // https://node-postgres.com/features/connecting

//   client.connect()
 
// //==========Original code ===================
// await client.connect()

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()


//   // ====================== New code to select all ============================ doesn't work
//   // client.query('SELECT * from VL', ['Hello world!'], (err, res) => {
//   //   console.log(err ? err.stack : res.rows[0]) // Hello World!
//   //   client.end()
//   // })
    
//   //======================= New code to insert into the DB ======================
//   // const res = await client.query(
//   //   'INSERT into viet (id, user_name) VALUES ($1, $2)',
//   //   ['viet3', 'Name3'], 
//   //   (err, res) => {
//   //   console.log(err ? err.stack : res.rows[0]) // Hello World!
//   //   client.end()
//   //   console.log('Loggin in function')
//   // })

const { Client } = require('pg')
const client = new Client('postgresql://viet-anhle:cassiopeia1!@localhost:5432/viet-anhle')

// http://

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})

}
start()

