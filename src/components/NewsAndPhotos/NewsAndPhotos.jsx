import { collection, getDocs } from '@firebase/firestore'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import { firestore } from '../../firebase'
import { converSnapshotToDocArray } from '../../firebase/firebase.utils'
import Loader from '../loader/loader'
import './NewsAndPhotos.css'

const NewsAndPhotos = () => {
  const [loading, setLoading] = React.useState(false)
  const [images, setImages] = React.useState([])
  React.useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true)
        const imageRef = collection(firestore, '/images')
        const snap = await getDocs(imageRef)
        const imgs = converSnapshotToDocArray(snap)
        setImages(imgs)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getImages()
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          paddingTop: '100px',
        }}
      >
        <Loader />
      </div>
    )
  }

  return (
    <div className='m-2'>
      <ImageGallery items={images} />
    </div>
  )
}

export default NewsAndPhotos
