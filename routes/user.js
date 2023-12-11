var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/user')
  },
  filename: function (req, file, cb) {
    // console.log(file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })


//signup
router.post('/add',upload.single('profileImage'),userController.addUser);

//Login
router.post('/login',userController.logIn);

//Alluser
router.get('/all',userController.CHECKJWT,userController.ALLUSER);

// update
router.put('/update/:id',upload.single('profileImage'),userController.CHECKJWT,userController.EDITUSER);

// delete
router.delete('/delete/:id',userController.CHECKJWT, userController.DELETETUSER);

// //Logout
// router.get('/logout',userController.CHECKJWT,userController.logOut);


module.exports = router;
