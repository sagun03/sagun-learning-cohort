const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const app = require("..");
const errorHandler = require("../middleware/errorHandler")

router.use(errorHandler);

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  isExistingUser = await userMiddleware.checkIsAdminExist(req.body.username);
  if (isExistingUser) {
    res.status(404).send({
      message: "User already registed",
    });
  } else {
    try {
      await User.create({
        userName: req.body.username,
        passWord: req.body.password,
        userId: uuidv4(),
      });
      res.status(200).json({
        message: "User Created Sucessfully",
      });
    } catch (err) {
      throw new Error(err);
    }
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/courses/:courseId", userMiddleware.userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courses = await Course.findOne({ courseId: req.params.courseId });
    res.status(200).json(courses);
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/purchasedCourses/:userId", userMiddleware.userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const courses = await User.find({ userId: req.params.userId });
    res.status(200).json(courses);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
