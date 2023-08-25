import React, { useState } from 'react'
import Home from '../Home/Home'
import { ref, uploadBytes } from "firebase/storage";
import {storage} from '../../firebase';

const UploadPhotos = () => {

    const [image, setImage] = useState('');

    const upload = () => {
        if(image == null)
        return;

        const imageRef = ref(storage, `/images/${image.name}`); 
        uploadBytes(imageRef)
    }
  return (
    <>
        <Home />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <input type='file' onChange={(e) => setImage(e.target.files[0])} />

        <button onClick={upload}>Upload Photos</button>
    </>
  )
}

export default UploadPhotos