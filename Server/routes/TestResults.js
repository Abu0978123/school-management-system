const express = require("express")
const router = express.Router()
const { TestResults } = require("../models")
const { Applicants } = require("../models")

///////////////TEST RESULTS///////////////////////

router.get("/testresult", async (req, res) => {
    const allresults = await Applicants.findAll({include:TestResults})
    res.json(allresults)
})

///////////////////////////////////////
router.get("/passedresult", async (req, res) => {
    const allresults = await Applicants.findAll({include:TestResults})
    res.json(allresults)
})


///////////////////TEST RESULTS////////////////////

router.post("/testresult", async (req, res) => {
    const { marks, ApplicantCnic } = req.body
    if ( !marks || !ApplicantCnic ) {
        return res.status(422).json({ error: "plx fill the filed properly" });
    }

    try {
        const resultExist = await TestResults.findOne({ where: { ApplicantCnic: ApplicantCnic }});

        if (resultExist) {
            return res.status(422).json({ error: "Applicant with result already exists" });
        }
        const applicantExist = await Applicants.findOne({where: {cnic:ApplicantCnic}})
        if(applicantExist ===null) {
            return res.status(404).json({ error: "Applicant doesnot exists" })
        }
        const result = req.body
        console.log(result)
        await TestResults.create(result)
        res.status(201).json({ message: "Result added succesfully" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router