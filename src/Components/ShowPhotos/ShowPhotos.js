import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../../firebase'

const ShowPhotos = () => {
    const [imgUrl, setImgUrl] = useState([]);

    useEffect(() => {
        listAll(ref(storage, '/images')).then(imgs => {
            console.log(imgs)
            imgs.items.forEach((val) => {
                getDownloadURL(val).then(url => {
                    setImgUrl([url])
                })
            })
        })
    },[])
    console.log(imgUrl)
  return (
    <>
        <Home />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    {imgUrl.map((dataVal) => {
                        return(
                            <img src={dataVal} height='200px' width='200px'/>
                        )
                    })} 
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowPhotos