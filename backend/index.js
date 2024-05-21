
let express=require('express')
let app= express()
app.use(express.urlencoded({extended:true}))
// //  let arr=['hii!!','byy!!','hello!!!']
// // let arr=['a','b','c','a','b']
app.set('view engine','ejs')
// app.use(express.static('public'))
// // app.get('/random',(req,res)=>{
// //     let a=Math.floor(Math.random()*100)
// //     res.render('random',{arr})
// // })
app.get('/',(req,res)=>
{
   res.render('random')
})
app.get('/user' ,(req,res) =>
{
    console.log(req.query, "huegfitg");
    let {name,email,password} = req.query
    res.send(`${name}  and  ${email} and  ${password} `)
    res.send('done')
})

app.post('/user',(req,res)=>{
    console.log(req.body,"rrrr");
    res.send('formm!!!')
})
app.listen(8000,()=>{
    console.log("server started");
})



// Partials//////////////////////////////////////////////////////////////////////////////




