import { Uploader } from './file-controller';
export const s3Uploader:Uploader = {
    upload:async(fileName:string)=>{
        console.log(`Uploading ${fileName} to S3`);

        return true;
    }
}

//strategy design pattern -> dependency injection using interfaces as per SOLID principles