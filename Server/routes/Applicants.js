const express = require("express")
const router = express.Router()
const { Applicants } = require("../models")



/////////// SHOW APPLICANT ///////////

router.get("/applicant", async (req, res) => {
    const allapplicant = await Applicants.findAll()
    res.json(allapplicant)
})

///////////////////////////////////////////


router.post("/applicant", async (req, res) => {
    const { cnic, name, fathername, dob, nationality, caddress, paddress, phoneno } = req.body
    
    if (!cnic || !name || !fathername || !dob || !nationality || !caddress || !paddress || !phoneno) {
        return res.status(422).json({ error: "plx fill the filed properly" });
    }

    try {
        const applicantExist = await Applicants.findOne({ where: { cnic: cnic } });

        if (applicantExist) {
            return res.status(422).json({ error: "User is already registered" });
        }
        const applicant = req.body
        await Applicants.create(applicant)
        // res.json(applicant)
        res.status(201).json({ message: "User registered succesfully" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router