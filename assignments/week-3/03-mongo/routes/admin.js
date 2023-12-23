const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { v4: uuidv4 } = require("uuid")
const { Admin, Course } = require("../db")
const errorHandler = require("../middleware/errorHandler")
// import { v4 as uuidv4 } from "uuid";
// import { Admin, Course } from "../db";
// import { errorHandler } from "../middleware/errorHandler";

router.use(errorHandler);
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  isExistingUser = await adminMiddleware.checkIsAdminExist(req.body.username);
  if (isExistingUser) {
    res.status(404).send({
      message: "User already registed",
    });
  } else {
    
    try {
      await Admin.create({
        userName: req.body.username,
        password: req.body.password,
        adminId: uuidv4(),
      });
      res.status(200).json({
        message: "Admin Created Sucessfully",
      });
    } catch (err) {
      throw new Error(err);
    }
  }
});

router.post("/courses", adminMiddleware.adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const response = await Course.create({
      title: req.body.title,
      courseId: uuidv4(),
      description: req.body.title,
      imageLink: req.body.imageLink,
      price: req.body.price,
      published: req.body.published,
    });
    if (response)
      res.status(200).json({
        message: "Course created successfully",
        courseId,
      });
      res.status(200).json({
        message: "Admin Created Sucessfully",
      });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/courses", adminMiddleware.adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses =  await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
