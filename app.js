const express = require('express')
const app = express()
const port = 8000

var listWorldMap=[
    "/public/assets/img/world-map/ARIENNE.png",
    "/public/assets/img/world-map/FARINGARD.png",
    "/public/assets/img/world-map/GRANDAR.png",
    "/public/assets/img/world-map/SANAHARA.png",
    "/public/assets/img/world-map/VALENSIA.png",
    "/public/assets/img/world-map/YANSHU.png",
    "/public/assets/img/world-map/ZANTO.png"
]

var listHero=[
    {
        name:"Grana",default:"/public/assets/img/hero/GRANA.png"  , glow: "/public/assets/img/hero/GRANA-GLOW.png",static:"/public/assets/img/hero/GRANA-STATIC.png"
    },
    {
        name:"Astra",default:"/public/assets/img/hero/ASTRA.png"  , glow: "/public/assets/img/hero/ASTRA-GLOW.png", static:"/public/assets/img/hero/ASTRA-STATIC.png"
    },
    {
        name:"Curtis",default:"/public/assets/img/hero/CURTIS.png"  , glow: "/public/assets/img/hero/CURTIS-GLOW.png", static:"/public/assets/img/hero/CURTIS-STATIC.png"
    },
    {
        name:"Laslow",default:"/public/assets/img/hero/LASLOW.png"  , glow: "/public/assets/img/hero/CURTIS-GLOW.png", static:"/public/assets/img/hero/LASLOW-STATIC.png"
    },
    {
        name:"Tyra",default:"/public/assets/img/hero/TYRIA.png"  , glow: "/public/assets/img/hero/CURTIS-GLOW.png", static:"/public/assets/img/hero/TYRIA-STATIC.png"
    },
    {
        name:"Quinn",default:"/public/assets/img/hero/QUINN.png"  , glow: "/public/assets/img/hero/CURTIS-GLOW.png", static:"/public/assets/img/hero/QUINN-STATIC.png"
    },
]
app.use('/public', express.static(__dirname + "/public"));

app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index',{listWorldMap: listWorldMap, listHero: listHero})
})

// Listen on port 3000
app.listen(port,()=> console.info(`Listening on port ${port}`))