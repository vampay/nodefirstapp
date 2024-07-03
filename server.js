const users = require('./db.json');//เชื่อม db.json
const express = require("express");
const app = express(); 
//เรียกใช้ express  และถัดมาเป็นคำสั่ง excecute เก็บในตัวแปร app

const port = process.env.PORT || 3000; 
//ตรวจสอบว่ามีการตั้งค่า Port ใน Environment Varibles หรือไม่ ถ้าไม่ให้ใช้
//Default Port เป็น 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/nat", (req, res) => { res.send("Hello! My name is Nattanun");});
//คือ Route เป็นการกำหนด Path รวมถึง HTTP Method ภายในเป็นการประมวลผล

app.get('/api/users', (req, res) => {//ดึงข้อมูลของdb.json มาแสดง
    res.json(users)//usersดึงมาจาก const users = required('./db.json'); บรรทัดที่1
 });

 app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
 });

 app.post('/api/users', (req, res) => { 
    users.push(req.body)
    let json = req.body //let คือกำหนดให้ json...
    console.log(json);
    res.send("Username:"+json.username+"insented");
});

app.put('/api/users/:id', (req, res) => {

    const updateIndex = users.findIndex(user => user.id ===
 Number(req.params.id)) 
 
     res.send(`Update user id: '${users[updateIndex].id}' completed.`)
 
 });

 app.delete('/users/:id', (req, res) => {

    const deletedIndex = users.findIndex(user => user.id ===
 Number(req.params.id)) 
 
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
 
 })








app.put('/api/users/:id', (req, res) => {

    const updateIndex = users.findIndex(user => user.id ===
Number(req.params.id)) 
 
     res.send(`Update user id: '${users[updateIndex].id}' completed.`)
 
 })

app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port +"/nat");
    console.log("Starting node.js at http://127.0.0.1:" + port +"/api/users");
    console.log("Starting node.js at http://127.0.0.1:" + port +"/api/users/:id");

});
