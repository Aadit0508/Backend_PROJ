import {Router} from "express"
import {changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage} from "../controllers/user.controller.js"
import {upload} from "../middleware/multer.middleware.js"
import {verifyJWT} from "../middleware/auth.middleware.js"
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

router.route("/login").post(loginUser)
// middleware to verify JWT token before allowing access to the logout route
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

router.route("/change_password").post(verifyJWT,changeCurrentPassword)

router.route("/current_user").post(verifyJWT,getCurrentUser)

router.route("/update_acc_details").patch(verifyJWT,updateAccountDetails)

// only for single file 
router.route("/avatar_change").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)

router.route("/coverImage_change").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage) 

// different for params
// name the same shit 
// agar controller mei userName hai then yaha bhi userName hona chahiye
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

router.route("/history").get(verifyJWT,getWatchHistory) 
export default router