const express = require("express")
const router = express.Router()
const { Datesheet } = require("../models")

router.get("/datesheet", async (req, res) => {
    const allpapers = await Datesheet.findAll()
    res.json(allpapers)
})

///////////////ADD DATESHEET//////////////////
router.post("/datesheet", async (req, res) => {
    const { pdate, class1, class2, class3, class4, class5, class6, class7, class8 } = req.body

    try {
        const subjectExist = await Datesheet.findOne({ where: { class1: class1 } || { class2: class2 } || { class3: class3 } || { class4: class4 } || { class5: class5 } || { class6: class6 } || { class7: class7 } || { class8: class8 }  });
        console.log(subjectExist)
        if (subjectExist) {
            return res.status(422).json({ error: "Subject already exist" });
        }
        const datesheet = req.body
        await Datesheet.create(datesheet)
        // res.json(student)
        res.status(201).json({ message: "Subject added to datesheet succesfully" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router