import React, { useState } from 'react'
import Home from '../Home/Home'
import { ref, uploadBytes } from "firebase/storage";
import {storage} from '../../firebase';

const UploadPhotos = () => {

    const [image, setImage] = useState(null);

    const upload = async () => {
      if (!image) {
        alert("please choose any image")
        return;
      }
      try {
        const imageRef = ref(storage, `/images/${image.name}`);
        await uploadBytes(imageRef, image);
        alert('Image uploaded successfully!');
      } catch (error) {
        alert('Error uploading image:', error);
      }
    };
  return (
    <>
        <Home />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={upload}>Upload Photos</button>
    </>
  )
}

export default UploadPhotos