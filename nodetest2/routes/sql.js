var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


async function start(){
  // const { Client } = require('pg')
  // const client = new Client()
  
  // await client.connect()
 
  // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  // console.log(res.rows[0].message) // Hello world!
  console.log('Loggin in function')
  await client.end()

}

start()
