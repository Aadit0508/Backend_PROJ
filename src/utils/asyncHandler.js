// wrapper for async functions to handle errors and pass them to the next middleware

const asyncHandler = (requestHandler) => { //request handler is the controller
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }


/*
Take any async controller
       ↓
Wrap it in try/catch automatically
       ↓
If error happens
       ↓
Send error to Express error middleware

*/



// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }