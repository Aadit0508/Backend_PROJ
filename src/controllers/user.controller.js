import {asyncHandler} from "../utils/asyncHandler.js"


// stores all the logic of creating a user
const registerUser= asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser}