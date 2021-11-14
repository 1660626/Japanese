const express = require('express')
const app = express();
const bodyParser = require("body-parser");
var fs = require('fs');
var path = require('path');
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
// const PORT = 3000

var data = {},
  dir = __dirname + '/data/';

fs.readdirSync(dir).forEach(function (file) {
  if ((path.basename(dir + file, path.extname(dir + file)) != "pharse") && path.extname(dir + file) === ".json") {
    data[file.replace(/\.json$/, '')] = require(dir + file);
  }
});

request = require('request');

// for (const [key, value] of Object.entries(data)) {
//   console.log(`${key}: ${value}`);
// }

app.get('/noti', (req, res) => {

  //request.get(`https://mina.mazii.net/db/phrase/${}.mp3`)
  // .on('error', function(err) {
  //   // handle error
  // })
  // .pipe(fs.createWriteStream('./voice/phrase/2.mp3'));
  //  for (const key in data) {
  //   data[key].forEach((e)=>{
  //     if(e.voice){
  //     console.log(e.voice)
  // request.get(`https://mina.mazii.net/db/phrase/${e.voice}.mp3`)
  //   .on('error', function(err) {
  //     // handle error
  //   })
  //   .pipe(fs.createWriteStream(`./voice/phrase/${e.voice}.mp3`));
  //     }
  //   })
  // }
  res.json(data)


})
app.post('/voice', (req, res) => {

console.log(req.body.name)
  
})
app.get('/voice/:id', (req, res) => {
  // const sname = req.params.sname || "";
  // res.writeHead(200, {'Content-Type': 'video/mp4'});
  // let opStream = require(`${__dirname}/voice/phrase/accommodation_1.mp3`);
  // opStream.pipe(res);

  // const file = `${__dirname}/public/voice/phrase/accommodation_1.mp3`;
  // res.send(file); // Set disposition and send it.


  // const stream =  require(`${__dirname}/public/voice/phrase/accommodation_1.mp3`);

  // res.set("content-type", "audio/mp3");
  // res.set("accept-ranges", "bytes");
  // res.set("content-length", Response.headers["content-length"]);

  // stream.on("data", (chunk) => {
  //   res.write(chunk);
  // });
// console.log(req.params.id)
fs.readFile(`${__dirname}/voice/phrase/${req.params.id}`, 
    function (err, content) {
        res.end(content);

    });
  // res.send(opStream)

})

// app.post('/noti', (req, res)=>{
//   // res.json({"mess": "Hello Would!"})
//   // const user = req.body;
//  data.push(JSON.parse(JSON.stringify(req.body)));

//    res.json(data);
// })

// app.get("/noti/:id", async function (req, res) {
//   const idd = req.params.id || 0;
//   console.log(idd)
//   let obj = data.find(o => o.id == idd);
//   if(obj){
//   res.json(obj);

//   }
//   else{
//   res.json(null);

//   }
// });

app.listen(PORT, () => { console.log("Server started on http://localhost:" + PORT) })

module.exports = app