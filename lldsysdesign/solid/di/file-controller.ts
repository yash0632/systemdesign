import { Request, Response } from 'express';
import { s3Uploader } from './s3-uploader';

export interface Uploader{
    upload:(fileName:string)=>Promise<boolean>;
}

export const fileController = {
    upload:async(req:Request,res:Response,{uploader}:{uploader:Uploader})=>{
        await uploader.upload('file.txt');//dependency 
        res.json({message:'Hello World!'});
    }
}

//it does not follow open closed principle