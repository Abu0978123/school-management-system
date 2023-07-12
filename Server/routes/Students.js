const express = require("express")
const router = express.Router()
const { Students } = require("../models")


////////////////SHOW STUDENTS/////////////////////////////

router.get("/student", async (req, res) => {
    const allstudents = await Students.findAll()
    res.json(allstudents)
})

////////////////////////////////////////////



router.get("/student/:id", async (req, res) => {
    const { id } = req.params;
    const allstudents = await Students.findOne({ where: { id: id } })
    res.json(allstudents)
})

///////////////ADD STUDENT///////////////////////

router.post("/student", async (req, res) => {
    const { id, studentname, fathername, city, province, caddress, paddress, phoneno, year } = req.body
    if (!id || !studentname || !fathername || !year || !city || !province || !caddress || !paddress || !phoneno) {
        return res.status(422).json({ error: "plx fill the filed properly" });
    }

    try {
        const studentExist = await Students.findOne({ where: { id: id } });

        if (studentExist) {
            return res.status(422).json({ error: "Student already exist" });
        }
        const student = req.body
        await Students.create(student)
        // res.json(student)
        res.status(201).json({ message: "Student registered succesfully" });
    } catch (err) {
        console.log(err);
    }
})


////////////////////UPDATE STUDENT//////////////////////

router.patch("/updatestudent/:id", async (req, res) => {
    try {
        const { studentname, fathername, city, province, caddress, paddress, phoneno, year } = req.body
        const { id } = req.params;

        await Students.update(//
            {
                studentname: studentname,
                fathername:fathername,
                city:city,
                province:province,
                caddress:caddress,
                paddress:paddress,
                phoneno:phoneno,
                year:year
            },
            {
                where: { id: id }
            });

        res.status(201).json({ message: "Student Updated Successfully" });

    } catch (error) {
        res.status(422).json({ error: "Failed to update Student" });
    }
})

////////DELETE STUDENT//////////

router.delete("/deletestudent/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Students.destroy({
            where: {
              id:id
            }
          });        

        res.status(201).json({ message: "Student Deleted Successfully" });

    } catch (error) {
        res.status(422).json({ error: "Failed to Delete Student" });
    }
})


module.exports = router