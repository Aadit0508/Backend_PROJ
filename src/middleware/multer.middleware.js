import multer from "multer"

//used as a middleware to handle file uploads and will be injected in the route handler where we want to handle file uploads


// There are different storage engines:

// diskStorage() → saves files in a folder ✅
// memoryStorage() → keeps files in RAM (useful for uploading directly to Cloudinary, AWS S3, etc.)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})

/*
User chooses image
        │
        ▼
Browser sends image
        │
        ▼
upload.single("avatar")
        │
        ▼
Multer saves image
(public/temp)
        │
        ▼
req.file now exists
        │
        ▼
registerUser()



Inside registerUser

console.log(req.file);

prints something like

{
  destination: './public/temp',
  filename: 'myPhoto.png',
  path: 'public/temp/myPhoto.png',
  mimetype: 'image/png',
  size: 129301
}
*/

