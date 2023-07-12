const express = require ("express")
const app = express()

app.use(express.json())
const db = require('./models')

//Routers
app.use(require("./routes/Students"))
app.use(require("./routes/Results"))
app.use(require("./routes/Applicants"))
app.use(require("./routes/TestResults"))
app.use(require("./routes/Datesheet"))
app.use(require("./routes/Admin"))

 
db.sequelize.sync().then(()=> {
    app.listen(5000,()=> {
        console.log("Server is running at port no 5000")
    })
})