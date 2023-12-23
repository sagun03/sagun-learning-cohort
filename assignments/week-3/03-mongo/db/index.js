const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('yur mongo url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    adminId: String,
    userName: String,
    password: String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userId: String,
    userName: String,
    password: String,
    purchasedCourses: Array
});

const CourseSchema = new mongoose.Schema({
    // Schema definition heretir
    title: String,
    courseId: String,
    description: String,
    imageLink: String, 
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}