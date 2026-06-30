// Fix: System DNS blocks MongoDB SRV record lookups (querySrv ECONNREFUSED).
// Overriding Node.js DNS to use Google's public DNS (8.8.8.8) resolves this.
// mongodb+srv:// requires a special DNS query (SRV lookup) to find the cluster —
// this must be set before any DB connection is attempted.

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import {app} from './app.js'
import dotenv from "dotenv"
import connectDB from "./db/index.js"

console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err)=>{
    console.log("MONGODB CONNECTION ERROR: ",err);
}) 




// 1ST WAY TO DO IT

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(err)=>{
//             console.log("ERROR: ",err);
//             throw err;
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }catch(error){
//         console.log("ERROR: ",error); 
//     }
// })()