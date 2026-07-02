import {Router} from "express"
import {registerUser} from "../controllers/user.controller.js"
import {upload} from "../middleware/multer.middleware.js"

const router=Router()

// control pass ab yaha kya kaam karna hai

// route is register not registerUser remember that
// middleware to handle file uploads.. multer will handle the file upload and then pass control to registerUser controller
router.route("/register").post(
    upload.fields([
        {name:"avatar",maxCount:1},
        {name:"coverImage",maxCount:1}
    ]),
    registerUser)


export default router