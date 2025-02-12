import express from 'express';
import { fileController } from './file-controller';
import { s3Uploader } from './s3-uploader';
import { cloudinaryUploader } from './cloudinary';

const app = express();

app.get('/file-upload', (req,res)=>fileController.upload(req,res,{uploader:cloudinaryUploader}));


app.listen(3000, () => {
  console.log('http://localhost:3000');
});