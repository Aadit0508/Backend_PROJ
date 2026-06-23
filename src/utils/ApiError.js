// allows us to throw rich errors instead of normy nerd errors


class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
        // A stack trace tells us:
        // Where did the error happen?
        // Which functions were called?
    ){
        // call parent class constructor and store the values in the instance
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            // for a custom stack trace
            this.stack = stack
        } else{
            // Node automatically generates a stack trace when an error is thrown.
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}

/*
Instead of:

throw new Error("User not found")

you do:

throw new ApiError(
    404,
    "User not found"
)

Now the error object looks like:

{
    statusCode: 404,
    data: null,
    message: "User not found",
    success: false,
    errors: []
} 
*/