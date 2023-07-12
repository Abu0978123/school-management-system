const express = require("express")
const router = express.Router()
const { Results } = require("../models")
const { Students } = require("../models")

/////////FIND RESULTS OF ALL/////////////

router.get("/result", async (req, res) => {
    const allresults = await Results.findAll()
    res.json(allresults)
})
/////////////SINGLE RESULT///////////////
router.get("/result/:id", async (req, res) => {
    const { id } = req.params;
    const allresults = await Results.findOne({ where: { id: id } })
    res.json(allresults)
})

/////////CLASS RESULT//////////
router.post("/semesterresult", async (req, res) => {
    const { year } = req.body
    const allresults = await Students.findAll({
        include: [{
            model: Results,
            where: {
                year: year
            }
        }]
    })
    res.json(allresults)
})

////////// STUDENT RESULTS /////////

router.post("/studentresult", async (req, res) => {
    const { id } = req.body
    const allresults = await Students.findAll({
        include: [{
            model: Results,
        }],
        where: {

            id: id
        }
    })
    res.json(allresults)
})

/////////////ADD RESULT///////////////
router.post("/result", async (req, res) => {
    const { StudentId, year, computer, nazira, islamiat, urdu, math, pakstudy, science, english } = req.body
    if (!StudentId || !year || !computer || !nazira || !islamiat || !urdu || !math || !pakstudy || !science || !english) {
        return res.status(422).json({ error: "plx fill the filed properly" });
    }
    const studentExist = await Students.findOne({ where: { id: StudentId } })
    if (studentExist === null) {
        return res.status(404).json({ error: "Student with ID doesnot exists" })
    }
    console.log(studentExist)

    try {
        const resultExist = await Results.findOne({
            where: {
                year: year, StudentId: StudentId
            }
        })
        if (resultExist === null) {
            const result = req.body
            console.log(result)
            await Results.create(result)
            // res.json(student)
            res.status(201).json({ message: "Result added succesfully" });

        } else {
            res.status(422).json({ error: "Result already exists" });
        }

    } catch (err) {
        console.log(err);
    }
})

//////////////DELETE RESULT////////////////////////

router.delete("/deleteresult/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Results.destroy({
            where: {
                id: id
            }
        });

        res.status(201).json({ message: "Student Deleted Successfully" });

    } catch (error) {
        res.status(422).json({ error: "Failed to Delete Student" });
    }
})

////////////////////UPDATE STUDENT//////////////////////

router.patch("/updateresult/:id", async (req, res) => {
    try {
        const { StudentId, year, computer, nazira, islamiat, urdu, math, pakstudy, science, english } = req.body
        const { id } = req.params;
        await Results.update(
            {
                StudentId: StudentId,
                year: year,
                computer: computer,
                nazira: nazira,
                islamiat: islamiat,
                urdu: urdu,
                math: math,
                pakstudy: pakstudy,
                science: science,
                english: english
            },
            {
                where: { id: id }
            });

        res.status(201).json({ message: "Student Updated Successfully" });

    } catch (error) {
        res.status(422).json({ error: "Failed to update Student" });
    }
})


module.exports = router