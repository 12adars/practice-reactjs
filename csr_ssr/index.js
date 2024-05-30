let express = require('express')

let app = express()
let arr=[1,2,3,4,5]
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.get('c',(req,res)=>{
    res.render('index')
})
app.get('/todo',(req,res)=>{
    res.json(arr)
})
app.post('/todo',(req,res)=>{
    console.log(res.body,"jjookd");
    let {data}= req.body
    let data1= parseInt(data)
    arr.push(data1)
    res.json('heke')
})
app.listen('7000',()=>{
    console.log('dsfknsdvkjsdnvjosdnfjks');
})