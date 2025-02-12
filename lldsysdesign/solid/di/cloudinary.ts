import { Uploader } from "./file-controller";

export const cloudinaryUploader : Uploader = {
    upload:async(fileName:string)=>{
        console.log(`Uploading ${fileName} to Cloudinary`);
        
        return true;
    }
}