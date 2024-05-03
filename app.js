const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var hbs = require('hbs')
const axios = require('axios')

const PORT = 4444
/*const JSON = require('JSON')*/

/*const SCRIPT = require('./script')*/


app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.json())
app.use(express.json())
hbs.registerPartials(__dirname+'/views/partials')



app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
  
    app.get('/',(req,res)=>{
        // res.sendFile(path.join(__dirname,'index.html'));
        res.render('head');
    })
    });


app.post('/hey',(req,res)=>{
    
    const{country,aqi} = req.body
    axios.get(` http://api.weatherapi.com/v1/current.json?key=84e2887128db4f4ebc613820241004 &q=${country}&aqi=${aqi}`)
        .then(data=>{
            /*console.log(data.data)*/
            data = data.data
            
           /* console.log(d)*/
            
           /* data = data.json()*/
            /*SCRIPT.Use(data)*/
            console.log(data)
           

            res.render('index',{data})
           
           


        })
        .catch(err=>{
            console.log(err)
        })



    

})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})
