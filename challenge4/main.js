var sys = require('sys'), http = require('http'), fs = require('fs')
var Mustache = require('./node_modules/mustache');

//Input Variable
var data = {
  "customer":{
     "name":"",
     "address":"",
     "age":"",
     "email":"",
     "tel":"",
     "userId":14
  },
  "order":{
    "coupons":[2,4,9],
    "donation":""
  },
  "terms":"All sales are final"
};

//pushing neccessary render information into an array
var actions = [];
actions.push({
  path: "/idealForms",
  template: "index.html",
  view: data
})

//start server
http.createServer(function (req, res) {
    fs.readFile(actions[0].template, 'utf8', function(err,template) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(Mustache.to_html(template, actions[0].view),'utf8')
            res.end()
     })
}).listen(8000,"127.0.0.1");
console.log('Server running at http://127.0.0.1:8000/')
