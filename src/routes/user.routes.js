import {Router} from "express"
import {registerUser} from "../controllers/user.controller.js"

const router=Router()

// control pass ab yaha kya kaam karna hai

// route is register not registerUser remember that
router.route("/register").post(registerUser)


export default router