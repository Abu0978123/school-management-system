const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const { Admin } = require("../models")

/////////Add Admin//////////
router.post("/admin", async (req, res) => {
    const { username, password, cpassword } = req.body
   
    if (!username || !password || !cpassword ) {
        return res.status(422).json({ error: "plx fill the filed properly" });
    }    
     try {
        const userExist = await Admin.findOne({ where: { username: username } });
        console.log(userExist)
        if (userExist) {
            return res.status(422).json({ error: "User already exist" });
        }
        else if(password !== cpassword) {
            return res.status(422).json({ Error: "Password do not matches" });
          }

          
          else (async () => {
            const hashpassword = await bcrypt.hash(password, 10);
            const hashcpassword = await bcrypt.hash(cpassword, 10);
            // Store hash in your password DB.
            await Admin.create({
                username:username,
                password:hashpassword,
                cpassword:hashcpassword
            })
        })();
        


        // res.json(student)
        res.status(201).json({ message: "User added succesfully" });
    } catch (err) {
        console.log(err);
    }
})

/////////// LOGIN//////////

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body
    
        if(!username || !password) {
          return res.status(422).json({ error: "Incorrect username or password" });
        }
        userExist = await Admin.findOne({ where: { username:username, password:password } })
        const user = await Admin.findOne({where : { username:username } })
        if (!user) {
            res.status(422).json({error:"User not found"})         
        }
        bcrypt.compare(password, user.password).then((match)=> {
            if(!match) {
                res.status(422).json({error:"User not found"}) 
            }
            
                res.status(201).json({Message:"user loggged in successfully"}) 

            
        })
    
      } catch(err) {
        console.log('Error');
      }
})



module.exports = router