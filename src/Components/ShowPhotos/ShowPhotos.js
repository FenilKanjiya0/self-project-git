import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import { getDownloadURL, listAll, ref, deleteObject  } from "firebase/storage";
import { storage } from "../../firebase";

const ShowPhotos = () => {
  const [imgUrl, setImgUrl] = useState([]);


  const fetchImageUrls = async () => {
    try {
      const imageRefList = await listAll(ref(storage, '/images'));
      const urls = await Promise.all(
        imageRefList.items.map(async (val) => {
          const url = await getDownloadURL(val);
          return url;
        })
      );
      setImgUrl(urls);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
    }
  };

  useEffect(() => {
    fetchImageUrls();
  }, []);

  const deleteImages = (url) => {
    const desertRef = ref(storage, url);

    deleteObject(desertRef).then(() => {
        alert("Delete Images successfully")
        fetchImageUrls();
      }).catch(() => {
        alert('Delete is not working')
      });
  }

  return (
    <>
      <Home />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
        {imgUrl.map((url, index) => {
            return (
              <div className="col-md-4 mb-5">
                 <img key={index} src={url} alt={`Image ${index}`} width='300px' height='300px'/>
                 <button className="btn btn-danger mt-2" onClick={() => deleteImages(url)}>delete Images</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowPhotos;
