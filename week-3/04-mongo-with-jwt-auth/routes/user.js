const { Router } = require("express");
const router = Router();
const {User,Course} = require("../db");
const {JWT_SECRET} = require("../config");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin',async  (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    //console.log(JWT_SECRET);
    const user =  await User.findOne({
        username : username,
        password : password
    })

   // console.log(user);
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then((response)=>{res.json({course : response})})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
  // console.log(username);
    const courseId = req.params.courseId;

    await User.updateOne({
        username : username
    },{
        "$push" :{
            purchasedCourses : courseId
        } 
    })
    res.json({
        message: "Purchase complete!"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username : username
    })

    const course = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });

    res.json({
        "Purchased courses" : course
    })


});

module.exports = router