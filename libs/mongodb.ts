import mongoose from "mongoose";

let isConnected = false;

const  connect= async (uridb: string)=>{
    if(isConnected){
        console.log("Using existing connection");
        return;
    }

    try{
        await mongoose.connect(uridb!);
        isConnected = true;
    } catch(err){
        process.exit(1);
    }   
}

export default connect;