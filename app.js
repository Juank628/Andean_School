const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index', {linkHome: "current"})
})

app.get('/about',(req,res)=>{
    res.render('index', {linkAbout: "current"})
})

app.get('/academic',(req,res)=>{
    res.render('index', {linkAcademic: "current"})
})

app.get('/news',(req,res)=>{
    res.render('index', {linkNews: "current"})
})

app.get('/contact',(req,res)=>{
    res.render('index', {linkContact: "current"})
})

app.listen(3000)