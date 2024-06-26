var http = require('http');

var dt = require('./mydatemodule');//./mydatemodule จุดตัวเดียวอยู่ในโฟลเดอร์เดียวกัน แต่ถ้า2จุดแปลว่าย้อนกลับไป1โฟลเดอร์



http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write("The date and time are currently: " + dt.myDateTime());

   res.end();

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');//8080  กำหนดให้พอตให้ทำงานได้ตั้งแต่ 1024-65535