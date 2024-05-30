
let express= require('express')
let methodoverride=require('method-override')
let app= express()
app.use(methodoverride('_method'))
// app.use(express.urlencoded({extended:true}))
// // //  let arr=['hii!!','byy!!','hello!!!']
// // // let arr=['a','b','c','a','b']
// app.set('view engine','ejs')
// // app.use(express.static('public'))
// // // app.get('/random',(req,res)=>{
// // //     let a=Math.floor(Math.random()*100)
// // //     res.render('random',{arr})
// // // })
// app.get('/',(req,res)=>
// {
//    res.render('random')
// })
// app.get('/user' ,(req,res) =>
// {
//     console.log(req.query, "huegfitg");
//     let {name,email,password} = req.query
//     res.send(`${name}  and  ${email} and  ${password} `)
//     res.send('done')
// })

// app.post('/user',(req,res)=>{
//     console.log(req.body,"rrrr");
//     res.send('formm!!!')
// })
// app.listen(8000,()=>{
//     console.log("server started");
// })


////////////////////////////////////20-05-2024





// const  express = require('express')

// let comments = [
//     {
//         id:0,
//         username:"Sam",
//         comment:"chitkara is a nice university 0"
//     },
//     {
//         id:1,
//         username:"g2",
//         comment:"chitkara is a nice university 1"
//     },
//     {
//         id:2,
//         username:"vohra",
//         comment:"chitkara is a nice university 2"
//     }
//   ]
// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:true}))

//   app.get('/blogs',(req,res)=>{
// res.render('index',{comments})
//   })

//   app.get('/blogs/new',(req,res)=>{
// res.render('new')
//   })
//   app.post('/blogs',(req,res)=>{
//     // console.log(req.body,'hlo')
//     let {username,comment} = req.body
//     comments.push({username,comment,id:comments.length})
//     res.redirect('/blogs')
//     // res.send('body')
//     })


//     app.get('/blogs/:id',(req,res)=>{
//       let {id}=req.params
//       console.log(id,"ididid");
    
//       let data=  comments.find((data)=>{return data.id==id})
//       console.log(data,"dagta");
//       res.render('Edit',{data})
  
//     })
    
    
//   app.patch('/blogs/:id',(req,res)=>{
//       let {id}=req.params
//       console.log(id,'eje');
//       let {username,comment}=req.body
    
//       let data=  comments.find((data)=>{return data.id==id})
//       console.log(data,"datata");
    
//       data.comment=comment
//       data.username=username
//       res.redirect('/blogs')
//   })
//     app.delete('/blogs/:id',(req,res)=>{
//       let {id}=req.params
//       let newdata= comments.filter((data)=>{
//         return data.id!=id
//       })
//         comments=newdata
//         res.redirect('/blogs')
//     })


//   app.listen(7000,()=>{
// console.log('server on demand')
//   })



// Partials//////////////////////////////////////////////////////////////////////////////





 let comments=[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "id": 3,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "year": 1851
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925
  },
  {
    "id": 5,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "year": 1869
  },
  {
    "id": 6,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "year": 1813
  },
  {
    "id": 7,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": 1951
  },
  {
    "id": 8,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
  },
  {
    "id": 9,
    "title": "Ulysses",
    "author": "James Joyce",
    "year":2003
  }
    ]
   
   app.set('view engine','ejs')
   app.use(express.urlencoded({extended:true}))

   app.get('/blogs',(req,res)=>{
   res.render('index',{comments})
   })
   app.get('/blogs/first',(req,res)=>{
     res.render('first')
       })
      app.post('/blogs',(req,res)=>{
         // console.log(req.body,'hlo')
        let {title,Author} = req.body
        comments.push({title,Author,id:comments.length})
        res.redirect('/blogs')
        // res.send('body')
        })
        app.get('/blogs/new',(req,res)=>{
          let {title,Author}= req.body
          comments.POST({title,Author,year,id:comments.length})
          res.redirect('/blogs')
        })
        app.patch('/blogs/:id',(req,res)=>{
          let {id}=req.parms 
          
        })
        
   app.listen(7000,()=>{
     console.log('server on demand')
       })