const router = require("express").Router();
const multer = require("multer");
const path = require("path")
const Student = require("../models/Student");

var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: Storage
});

router.get("/list", (req, res) => {
if(res.cookie){
    Student.find((err, studs) => {
        if (!err) {
            res.render("index", { studs: studs });
        }
        else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}

})
router.get("/add", (req, res) => {
    res.render("add");
})
router.post("/add", upload.single('file'), async (req, res) => {
    try {
        var num1 = parseInt(req.body.m1);
        var num2 = parseInt(req.body.m2);
        var num3 = parseInt(req.body.m3);
        const total = num1 + num2 + num3;
        const per = parseFloat(total / 3).toFixed(2);
        var student1 = new Student({
            name: req.body.name,
            email: req.body.email,
            sem: req.body.sem,
            course: req.body.course,
            phno: req.body.phno,
            img: req.file.filename,
            m1: req.body.m1,
            m2: req.body.m2,
            m3: req.body.m3,
            per: per
        })
        await student1.save();
        res.status(200).redirect("/list");
    }
    catch (e) {
        res.status(401).send(e);
    }

})
router.get("/delete/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect("/list");
        } else {
            console.log("An Error Occured During Delete");
        }
    })
})

router.get("/update/:id", (req, res) => {
    Student.findOne({ _id: req.params.id }).then((result) => {
        res.render("update", { stud: result });
    }).catch((err) => {
        console.log(err)
    });
})
router.post("/update", upload.single('file'), async (req, res) => {
    try {
        var num1 = parseInt(req.body.m1);
        var num2 = parseInt(req.body.m2);
        var num3 = parseInt(req.body.m3);
        const total = num1 + num2 + num3;
        const per = parseFloat(total / 3).toFixed(2);
       
        await Student.findOneAndUpdate({ _id: req.body._id },{
            name: req.body.name,
            email: req.body.email,
            sem: req.body.sem,
            course: req.body.course,
            phno: req.body.phno,
            img: req.file.filename,
            m1: req.body.m1,
            m2: req.body.m2,
            m3: req.body.m3,
            per: per
        }, { new: true })
        res.status(200).redirect("/list");
    }
    catch (e) {
        res.status(401).send(e);
    }
})

module.exports = router;